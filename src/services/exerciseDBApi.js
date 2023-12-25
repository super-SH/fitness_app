import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

// const options = {
//   method: 'GET',
//   url: 'https://exercisedb.p.rapidapi.com/exercises',
//   params: {limit: '10'},
//   headers: {
//     'X-RapidAPI-Key': rapidApiKey,
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

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
  }),
});

export const { useGetBodyPartsListQuery } = exerciseDBApi;
