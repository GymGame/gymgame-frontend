import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ethers } from 'ethers';
import { addresses, ApiStatus } from '../constants';
import { IBaseAddressAsyncThunk } from './interfaces';
import { Gains__factory } from '../typechains/factories/Gains__factory';

import { Gains } from '../typechains';
import { BigNumber } from 'ethers';
import { ChainIds } from '../connectors';

export interface ProfileState {
  address?: string;
  chainId?: ChainIds;
  balances: {
    avax: string;
    protein: string;
    gains: string;
  };
  status: ApiStatus;
}

const initialState: ProfileState = {
  address: undefined,
  chainId: undefined,
  balances: {
    avax: '0',
    protein: '0',
    gains: '0',
  },
  status: ApiStatus.Idle,
};

interface SetActiveProfilePayload {
  address?: string;
  chainId?: number;
  balances: {
    avax: string;
    protein: string;
    gains: string;
  };
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    resetProfile: (state: ProfileState) => {
      state.address = undefined;
      state.chainId = undefined;
      state.balances.avax = '0';
      state.balances.protein = '0';
      state.balances.gains = '0';
      state.status = ApiStatus.Idle;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadAccountDetails.pending, (state: ProfileState) => {
      state.status = ApiStatus.Pending;
    });
    builder.addCase(loadAccountDetails.fulfilled, (state, action: PayloadAction<SetActiveProfilePayload>) => {
      state.status = ApiStatus.Resolved;
      state.address = action.payload.address;
      state.chainId = action.payload.chainId;
      state.balances.avax = action.payload.balances.avax;
      state.balances.protein = action.payload.balances.protein;
      state.balances.gains = action.payload.balances.gains;
    });
    builder.addCase(loadAccountDetails.rejected, (state) => {
      state.status = ApiStatus.Rejected;
    });
  },
});

export const loadAccountDetails = createAsyncThunk(
  //
  'profile/loadAccountDetails',
  async ({ provider, address, chainId }: IBaseAddressAsyncThunk): Promise<SetActiveProfilePayload> => {
    const signer = provider.getSigner();

    const gainsContract = new ethers.Contract(
      addresses[chainId].GAINS_TOKEN_ADDRESS,
      Gains__factory.abi,
      signer,
    ) as unknown as Gains;

    const gainsBalance = await gainsContract.balanceOf(address);
    const avaxBalance = await signer.getBalance();

    return {
      address,
      chainId,
      balances: {
        avax: ethers.utils.formatEther(avaxBalance),
        gains: ethers.utils.formatEther(gainsBalance),
        protein: ethers.utils.formatEther(BigNumber.from(0)),
      },
    };
  },
);

export const { resetProfile } = profileSlice.actions;

export default profileSlice.reducer;
