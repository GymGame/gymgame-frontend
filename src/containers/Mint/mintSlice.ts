import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { addresses, ApiStatus } from '../../constants';
import { IBaseAddressAsyncThunk } from '../../slices/interfaces';
import { GymJunkie, GymJunkie__factory } from '../../typechains';
import { calculateNFTGeneration } from './helper';
import MintDataFactory from './helper/MintDataFactory';

interface MintState {
  error?: string;
  status: ApiStatus;
  data: {
    nftsLimit: number;
    nftsMinted: number;
    price: string;
    mintGeneration: number;
    whiteList?: {
      price: string;
      userClaimableWhiteListNFTs: number;
    };
  };
}

export interface SetMintDetailPayload {
  nftLimit?: number;
  nftMinted?: number;
  price?: string;
  mintGeneration: number;
  whiteList?: {
    price: string;
    userClaimableWhiteListNFTs: number;
  };
}

const initialState: MintState = {
  status: ApiStatus.Idle,
  error: undefined,
  data: {
    nftsLimit: 0,
    nftsMinted: 0,
    price: '0',
    mintGeneration: 0,
  },
};

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadMintDetails.pending, (state: MintState) => {
      state.status = ApiStatus.Pending;
    });
    builder.addCase(loadMintDetails.fulfilled, (state: MintState, action: PayloadAction<SetMintDetailPayload>) => {
      state.status = ApiStatus.Resolved;
      if (action.payload.nftLimit) {
        state.data.nftsLimit = action.payload.nftLimit;
      }

      if (action.payload.nftMinted) {
        state.data.nftsMinted = action.payload.nftMinted;
      }

      if (action.payload.price) {
        state.data.price = action.payload.price;
      }
      state.data.whiteList = action.payload.whiteList
        ? {
            price: action.payload.whiteList.price,
            userClaimableWhiteListNFTs: action.payload.whiteList?.userClaimableWhiteListNFTs,
          }
        : undefined;
      state.data.mintGeneration = action.payload.mintGeneration;
    });
    builder.addCase(loadMintDetails.rejected, (state: MintState) => {
      state.status = ApiStatus.Rejected;
      //handle error state
    });
  },
});

export const loadMintDetails = createAsyncThunk(
  //
  'mint/loadMintDetails',
  async ({ provider, address, chainId }: IBaseAddressAsyncThunk): Promise<SetMintDetailPayload> => {
    try {
      const signer = provider.getSigner();

      const gymJunkieContract = new ethers.Contract( //
        addresses[chainId].GYM_JUNKIE_ADDRESS,
        GymJunkie__factory.abi,
        signer,
      ) as unknown as GymJunkie;

      //minting gen0 has not started
      const [avaxMintStarted, gainsMintStarted] = await Promise.all([
        gymJunkieContract.avaxMintStarted(),
        gymJunkieContract.gainsMintStarted(),
      ]);

      const nftMintGeneration = calculateNFTGeneration(avaxMintStarted, gainsMintStarted);

      const mintFactory = MintDataFactory(nftMintGeneration, gymJunkieContract, address);
      return await mintFactory.generate();
    } catch (error) {
      console.log('Failed to retrieve mint details');
      throw error;
    }
  },
);

export default mintSlice.reducer;
