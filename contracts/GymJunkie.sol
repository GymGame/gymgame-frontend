//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


contract GymJunkie is ERC721Enumerable, Ownable, Pausable {
    using SafeERC20 for IERC20;
    using Strings for uint256;

    // CONSTANTS

    uint256 public constant WHITELISTED_PRICE = 1 ether;
    uint256 public constant PUBLIC_PRICE = 1.5 ether;

    uint256 public constant WHITELISTED_NFTS = 1000;
    uint256 public constant NFTS_PER_GAINS_MINT_LEVEL = 2000;

    uint256 public constant MAXIMUM_MINTS_PER_WHITELIST_ADDRESS = 4;

    uint256 public constant GEN0LIMIT = 10_000;
    uint256 public constant GEN1LIMIT = 10_000;

    uint256 public constant PROMOTIONAL_NFTS = 50;

    address public gainsAddress;

    // VAR

    // metadata URI
    string public BASE_URI;

    // mint tracking
    uint256 public nftsMintedWithAvax;
    uint256 public nftsMintedWithGains;
    uint256 public nftsMintedWhitelist;
    uint256 public nftsMintedPromotional;
    uint256 public nftsMinted = 50; // First 50 ids are reserved for the promotional nfts

    bool public wlMintStarted;
    bool public avaxMintStarted;
    bool public gainsMintStarted;

    // GAINS mint price tracking
    uint256 public currentGainsMintCost = 20_000 * 1e18;

    // whitelist
    bytes32 public merkleRoot;
    mapping(address => uint256) public whitelistClaimed;

    // EVENTS

    event onGymJunkieCreated(uint256 tokenId);

    constructor(string memory _BASE_URI, address gainsAddress_) ERC721("Gym Junkie NFT", "GYM-GAME-NFT") {
        BASE_URI = _BASE_URI;
        gainsAddress = gainsAddress_;
    }

    // metadata

    function _baseURI() internal view virtual override returns (string memory) {
        return BASE_URI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return string(abi.encodePacked(_baseURI(), "/", tokenId.toString(), ".json"));
    }

    // ADMIN

    function startWhiteList() external onlyOwner {
        wlMintStarted = true;
    }

    function startAvax() external onlyOwner {
        avaxMintStarted = true;
    }

    function startGains() external onlyOwner {
        gainsMintStarted = true;
    }

    function stopWhiteList() external onlyOwner {
        wlMintStarted = false;
    }

    function stopAvax() external onlyOwner {
        avaxMintStarted = false;
    }

    function stopGains() external onlyOwner {
        gainsMintStarted = false;
    }

    function setBaseURI(string calldata _BASE_URI) external onlyOwner {
        BASE_URI = _BASE_URI;
    }

    /**
     * @dev merkle root for WL wallets
     */
    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    /**
     * @dev allows owner to send ERC20s held by this contract to target
     */
    function forwardERC20s(IERC20 _token, uint256 _amount, address target) external onlyOwner {
        _token.safeTransfer(target, _amount);
    }

    /**
     * @dev allows owner to withdraw AVAX
     */
    function withdrawAVAX(uint256 _amount) external payable onlyOwner {
        require(address(this).balance >= _amount, "not enough AVAX");
        address payable to = payable(_msgSender());
        (bool sent, ) = to.call{value: _amount}("");
        require(sent, "Failed to send AVAX");
    }

    // MINTING

    function _createNFT(address to, uint256 tokenId) internal {
        require (nftsMinted <= GEN0LIMIT + GEN1LIMIT, "cannot mint anymore nfts");
        _safeMint(to, tokenId);

        emit onGymJunkieCreated(tokenId);
    }

    function _createNFTs(uint256 qty, address to) internal {
        for (uint256 i = 0; i < qty; i++) {
            nftsMinted += 1;
            _createNFT(to, nftsMinted);
        }
    }

    /**
     * @dev Promotional GEN0 minting 
     * Can mint maximum of PROMOTIONAL_NFTS
     */
    function mintPromotional(uint256 qty, address target) external onlyOwner {
        require (qty > 0, "quantity must be greater than 0");
        require ((nftsMintedPromotional + qty) <= PROMOTIONAL_NFTS, "too much");

        for (uint256 i = 0; i < qty; i++) {
            nftsMintedPromotional += 1;
            _createNFT(target, nftsMintedPromotional);
        }
    }

    /**
     * @dev Whitelist GEN0 minting
     * We implement a hard limit on the whitelist nfts.
     */
    function mintWhitelist(bytes32[] calldata _merkleProof, uint256 qty) external payable whenNotPaused {
        // check most basic requirements
        require(merkleRoot != 0, "missing root");
        require(wlMintStarted, "cannot mint right now");

        // check if address belongs in whitelist
        bytes32 leaf = keccak256(abi.encodePacked(_msgSender()));
        require(MerkleProof.verify(_merkleProof, merkleRoot, leaf), "this address does not have permission");

        // check more advanced requirements
        require(qty > 0 && qty <= MAXIMUM_MINTS_PER_WHITELIST_ADDRESS, "quantity must be between 1 and 4");
        require((nftsMintedWhitelist + qty) <= WHITELISTED_NFTS, "you can't mint that many right now");
        require((whitelistClaimed[_msgSender()] + qty) <= MAXIMUM_MINTS_PER_WHITELIST_ADDRESS, "this address can't mint any more whitelist nfts");

        // check price
        require(msg.value >= WHITELISTED_PRICE * qty, "not enough AVAX");

        nftsMintedWhitelist += qty;
        whitelistClaimed[_msgSender()] += qty;

        // mint nfts
        _createNFTs(qty, _msgSender());
    }

    /**
     * @dev GEN0 minting
     */
    function mintNFTWithAVAX(uint256 qty) external payable whenNotPaused {
        require (avaxMintStarted, "cannot mint right now");
        require (qty > 0 && qty <= 10, "quantity must be between 1 and 10");
        require ((nftsMintedWithAvax + qty) <= (GEN0LIMIT - nftsMintedWhitelist - PROMOTIONAL_NFTS), "you can't mint that many right now");

        // calculate the transaction cost
        uint256 transactionCost = PUBLIC_PRICE * qty;
        require (msg.value >= transactionCost, "not enough AVAX");

        nftsMintedWithAvax += qty;

        // mint nfts
        _createNFTs(qty, _msgSender());
    }

    /**
     * @dev GEN1 minting 
     */
    function mintNFTWithGains(uint256 qty) external whenNotPaused {
        require (gainsMintStarted, "cannot mint right now");
        require (qty > 0 && qty <= 10, "invalid quantity");
        require ((nftsMintedWithGains + qty) <= GEN1LIMIT, "mint cap reached");

        // calculate transaction costs
        uint256 transactionCostGains = currentGainsMintCost * qty;
        require (IERC20(gainsAddress).balanceOf(_msgSender()) >= transactionCostGains, "not enough GAINS");

        // raise the mint level and cost when this mint would place us in the next level
        // if you mint in the cost transition you get a discount =)
        if(nftsMintedWithGains <= NFTS_PER_GAINS_MINT_LEVEL && nftsMintedWithGains + qty > NFTS_PER_GAINS_MINT_LEVEL) {
            currentGainsMintCost = currentGainsMintCost * 2;
        }

        nftsMintedWithGains += qty;

        // spend gainsAddress
        IERC20(gainsAddress).transferFrom(msg.sender, address(this), transactionCostGains);

        // mint nfts
        _createNFTs(qty, msg.sender);
    }

    // Returns information of users nfts
    function usersTokenIds(address user) external view returns (uint256[] memory) {
        uint256 amount = balanceOf(msg.sender);
        uint256[] memory tokenIds = new uint256[](amount);

        for(uint i=0; i < amount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(user, i);
        }

        return tokenIds;
    }
}