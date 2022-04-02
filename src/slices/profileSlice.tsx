import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
  address?: string;
  isActivating: boolean;
  chainId?: number;
  balances: {
    avax: number;
    protein: number;
    gains: number;
  };
}

const initialState: ProfileState = {
  address: undefined,
  isActivating: false,
  chainId: undefined,
  balances: {
    avax: 0,
    protein: 0,
    gains: 0,
  },
};

interface SetActiveProfilePayload {
  address?: string;
  chainId?: number;
  balances: {
    avax: number;
    protein: number;
    gains: number;
  };
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setActiveProfile: (state: ProfileState, action: PayloadAction<SetActiveProfilePayload>) => {
      state.address = action.payload.address;
      state.isActivating = false;
      state.chainId = action.payload.chainId;
      state.balances.avax = action.payload.balances.avax;
      state.balances.protein = action.payload.balances.protein;
      state.balances.gains = action.payload.balances.gains;
    },
  },
});

export const { setActiveProfile } = profileSlice.actions;

export default profileSlice.reducer;
