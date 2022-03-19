import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import globalErrorsReducer from './containers/Error/errorSlice';

export const store = configureStore({
  reducer: {
    globalErrors: globalErrorsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
