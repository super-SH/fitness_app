import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { exercisesSelector } from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';
import { ExerciseCard } from './';

function Exercises() {
  const { data } = useGetAllExercisesQuery();
  const { exercisesData } = useSelector(exercisesSelector);

  const exercisesDataToDisplay = exercisesData || data;

  console.log(exercisesData);

  return (
    <Box id='exercises' sx={{ mt: { xs: '36px', lg: '96px' } }} p='20px'>
      <Typography variant='h3' mb='36px'>
        Showing Results
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: 'center', alignItems: 'center' }}
      >
        {exercisesDataToDisplay?.slice(0, 16)?.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default Exercises;
