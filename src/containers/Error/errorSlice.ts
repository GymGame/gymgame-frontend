import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GlobalErrorType {
  General = 'GENERAL',
  UnsupportedChain = 'UNSUPPORTED_CHAIN',
  InvalidAccount = 'INVALID_ACCOUNT',
  WalletNotConencted = 'WALLET_NOT_CONNECT',
}

interface GlobalErrorPayload {
  type: GlobalErrorType;
  message?: string;
}

interface GlobalErrorState {
  errors: Array<{
    type: GlobalErrorType;
    message?: string;
  }>;
}

const initialState: GlobalErrorState = {
  errors: [],
};

const globalErrorsSlice = createSlice({
  name: 'globalErrors',
  initialState,
  reducers: {
    pushGlobalError: (state: GlobalErrorState, action: PayloadAction<GlobalErrorPayload>) => {
      if (!state.errors.some((e) => e.type === action.payload.type)) {
        state.errors.push({
          type: action.payload.type,
          message: action.payload.message,
        });
      }
    },
    removeGlobalError: (state: GlobalErrorState, action: PayloadAction<{ type: GlobalErrorType }>) => {
      const errors = state.errors.filter((error) => error.type !== action.payload.type);
      state.errors = errors;
    },
  },
});

export const { pushGlobalError, removeGlobalError } = globalErrorsSlice.actions;

export default globalErrorsSlice.reducer;
