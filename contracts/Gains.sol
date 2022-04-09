//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Gains is ERC20("Gains", "GAINS"), Ownable {

    error UNAUTHORIZED();

    mapping(address => bool) public authorizedAddresses;

    // ADMIN

    function authorizeAddress(address _address) external onlyOwner {
        authorizedAddresses[_address] = true;
    }

    function revokeAddress(address _address) external onlyOwner {
        authorizedAddresses[_address] = false;
    }

    // EXTERNAL

    function mint(address _to, uint256 _amount) external {
        _isAuthorized();
        _mint(_to, _amount);
    }

    function burn(address _from, uint256 _amount) external {
        _isAuthorized;
        _burn(_from, _amount);
    }

    // INTERNAL

    function _isAuthorized() internal view {
        if(msg.sender != owner() && (authorizedAddresses[msg.sender] != true)) revert UNAUTHORIZED();
    }
}