import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GlobalErrorType {
  General = 1,
  UnsupportedChain = 2,
  InvalidAccount = 3,
}

interface GlobalErrorPayload {
  type: GlobalErrorType;
  message: string;
}

interface GlobalErrorState {
  error: {
    type?: GlobalErrorType;
    message: string;
  };
}

const initialState: GlobalErrorState = {
  error: {
    type: undefined,
    message: '',
  },
};

const globalErrorsSlice = createSlice({
  name: 'globalErrors',
  initialState,
  reducers: {
    createGlobalError: (state: GlobalErrorState, action: PayloadAction<GlobalErrorPayload>) => {
      state.error.type = action.payload.type;
      state.error.message = action.payload.message;
    },
    clearGlobalError: (state: GlobalErrorState, action: PayloadAction<{ type: GlobalErrorType }>) => {
      if (state.error?.type === action.payload.type) {
        state.error.type = undefined;
        state.error.message = '';
      }
    },
  },
});

export const { createGlobalError, clearGlobalError } = globalErrorsSlice.actions;

export default globalErrorsSlice.reducer;
