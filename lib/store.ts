import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from '@/lib/topics/topicsSlice';
import authReducer from "./auth/authSlice"
import { authApi } from './authApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    topics: topicsReducer,
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;