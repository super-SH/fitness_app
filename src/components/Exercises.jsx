import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { exercisesSelector } from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';

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
      <Grid container spacing={4}>
        {exercisesDataToDisplay?.slice(0, 16)?.map((exercise, index) => (
          <Grid item key={exercise.id} xs={12} sm={6} md={4} lg={3} xl={2}>
            {exercise.name}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Exercises;
