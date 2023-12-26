import { createSlice } from '@reduxjs/toolkit';
import { exerciseDBApi } from '../services/exerciseDBApi';

const initialState = {
  searchTerm: '',
  bodyPart: 'all',
  exercisesData: [],
  page: 1,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    exercisesDataSet: (state, action) => {
      state.exercises = action.payload;
    },
    searchTermChanged: (state, action) => {
      state.searchTerm = action.payload;
    },
    bodyPartSelected: (state, action) => {
      state.bodyPart = action.payload;
    },
    pageSelected: (state, action) => {
      state.page = action.payload;
    },
    // need to accept number of total pages as the action.payload
    pageIncreased: (state, action) => {
      state.page = state.page >= action.payload ? state.page : state.page + 1;
    },
    pageDecreased: (state) => {
      state.page = state.page <= 1 ? state.page : state.page - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      exerciseDBApi.endpoints.getAllExercises.matchFulfilled,
      (state, action) => {
        state.exercisesData = action.payload;
      }
    );
  },
});

export const {
  exercisesDataSet,
  searchTermChanged,
  bodyPartSelected,
  pageSelected,
  pageDecreased,
  pageIncreased,
} = exercisesSlice.actions;

export const exercisesSelector = (state) => state.exercises;

const exercisesReducer = exercisesSlice.reducer;
export default exercisesReducer;