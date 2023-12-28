import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const rapidApiKey = import.meta.env.VITE_RAPID_API_KEY;

export const youtubeSearchApi = createApi({
  reducerPath: 'youtubeSearchApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://youtube-search-and-download.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': rapidApiKey,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    },
  }),
  endpoints: (builder) => ({
    getYoutubeVideosByName: builder.query({
      query: (name) => `/search?query=${name}`,
    }),
  }),
});

export const { useGetYoutubeVideosByNameQuery } = youtubeSearchApi;
