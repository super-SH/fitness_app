import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const exerciseDBApi = createApi({
  reducerPath: 'exerciseDBApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    },
  }),
  endpoints: (builder) => ({
    getBodyPartsList: builder.query({
      query: () => `/bodyPartList`,
    }),
    // get all data from api and filter it on the client side , to cosume less api request since rapid api has limit
    getAllExercises: builder.query({
      query: () => `?limit=99999`,
    }),

    getExerciseDetailsById: builder.query({
      query: (id) => `/exercise/${id}`,
    }),
  }),
});

export const {
  useGetBodyPartsListQuery,
  useGetAllExercisesQuery,
  useGetExerciseDetailsByIdQuery,
} = exerciseDBApi;
