import { ethers } from 'ethers';
import { GymJunkie } from '../../../typechains';
import { SetMintDetailPayload } from '../mintSlice';

export default (generation: number, gymJunkieContract: GymJunkie, address: string) => {
  const generate = async (): Promise<SetMintDetailPayload> => {
    switch (generation) {
      case -1: {
        return {
          mintGeneration: -1,
        };
      }
      case 0: {
        const [
          //
          nftLimit,
          publicPrice,
          nftMinted,
        ] = await Promise.all([
          gymJunkieContract.GEN0LIMIT(),
          gymJunkieContract.PUBLIC_PRICE(),
          gymJunkieContract.nftsMintedWithAvax(),
        ]);

        const isUserOnWhiteList = false; //to double check
        let whiteList = undefined;
        if (isUserOnWhiteList) {
          const [
            //
            maximumMintsPerWhitelistAddress,
            userClaimedWhiteList,
            whiteListPrice,
          ] = await Promise.all([
            gymJunkieContract.MAXIMUM_MINTS_PER_WHITELIST_ADDRESS(),
            gymJunkieContract.whitelistClaimed(address),
            gymJunkieContract.WHITELISTED_PRICE(),
          ]);

          whiteList = {
            price: ethers.utils.formatEther(whiteListPrice),
            userClaimableWhiteListNFTs: maximumMintsPerWhitelistAddress.toNumber() - userClaimedWhiteList.toNumber(),
          };
        }

        return {
          whiteList: whiteList,
          price: ethers.utils.formatEther(publicPrice),
          mintGeneration: generation,
          nftLimit: nftLimit.toNumber(),
          nftMinted: nftMinted.toNumber(),
        };
      }
      case 1:
      default:
        throw new Error();
    }
  };

  return {
    generate,
  };
};
