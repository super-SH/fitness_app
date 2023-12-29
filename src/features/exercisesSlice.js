import { createSlice } from '@reduxjs/toolkit';
import { exerciseDBApi } from '../services/exerciseDBApi';

const initialState = {
  searchTerm: '',
  bodyPart: 'all',
  bodyPartsList: [],
  exercisesData: [],
  selectedExerciseName: '',
  page: 1,
  indexOfFirstExercise: 0,
  indexOfLastExercise: 15,
};

const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    exercisesDataSet: (state, action) => {
      state.exercisesData = action.payload;
    },
    searchTermChanged: (state, action) => {
      state.page = 1;
      state.indexOfFirstExercise = 0;
      state.indexOfLastExercise = 15;
      state.searchTerm = action.payload;
    },
    bodyPartSelected: (state, action) => {
      state.page = 1;
      state.indexOfFirstExercise = 0;
      state.indexOfLastExercise = 15;
      state.bodyPart = action.payload;
    },
    pageSelected: (state, action) => {
      state.page = action.payload;
    },
    indexOfFirstExerciseSet: (state, action) => {
      state.indexOfFirstExercise = action.payload;
    },
    indexOfLastExerciseSet: (state, action) => {
      state.indexOfLastExercise = action.payload;
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
    builder
      .addMatcher(
        exerciseDBApi.endpoints.getBodyPartsList.matchFulfilled,
        (state, action) => {
          state.bodyPartsList = ['all', ...action.payload];
        }
      )
      .addMatcher(
        exerciseDBApi.endpoints.getExerciseDetailsById.matchFulfilled,
        (state, action) => {
          state.selectedExerciseName = action.payload?.name;
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
  exerciseNameSelected,
  indexOfFirstExerciseSet,
  indexOfLastExerciseSet,
} = exercisesSlice.actions;

export const exercisesSelector = (state) => state.exercises;

const exercisesReducer = exercisesSlice.reducer;
export default exercisesReducer;
