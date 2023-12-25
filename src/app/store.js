import { configureStore } from '@reduxjs/toolkit';
import { exerciseDBApi } from '../services/exerciseDBApi';

export const store = configureStore({
  reducer: {
    [exerciseDBApi.reducerPath]: exerciseDBApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exerciseDBApi.middleware),
});
