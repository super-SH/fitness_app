import { configureStore } from '@reduxjs/toolkit';
import { exerciseDBApi } from '../services/exerciseDBApi';
import exercisesReducer from '../features/exercisesSlice';
import { youtubeSearchApi } from '../services/youtubeSearchApi';

export const store = configureStore({
  reducer: {
    [exerciseDBApi.reducerPath]: exerciseDBApi.reducer,
    [youtubeSearchApi.reducerPath]: youtubeSearchApi.reducer,
    exercises: exercisesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(exerciseDBApi.middleware)
      .concat(youtubeSearchApi.middleware),
});
