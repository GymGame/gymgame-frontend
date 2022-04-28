import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import globalErrorsReducer from './containers/Error/errorSlice';
import profileReducer from './slices/profileSlice';
import mintReducer from '../src/containers/Mint/mintSlice';

export const store = configureStore({
  reducer: {
    globalErrors: globalErrorsReducer,
    profile: profileReducer,
    mint: mintReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
