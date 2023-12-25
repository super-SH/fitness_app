import { Box } from '@mui/material';
import React from 'react';
import { Exercises, HeroBanner, SearchExercises } from '../components';

function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
}

export default Home;
