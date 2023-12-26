import { configureStore } from '@reduxjs/toolkit';
import { exerciseDBApi } from '../services/exerciseDBApi';
import exercisesReducer from '../features/exercisesSlice';

export const store = configureStore({
  reducer: {
    [exerciseDBApi.reducerPath]: exerciseDBApi.reducer,
    exercises: exercisesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exerciseDBApi.middleware),
});
