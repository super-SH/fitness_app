import { Box, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  exercisesDataSet,
  exercisesSelector,
  pageSelected,
} from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';
import { ExerciseCard } from './';

function Exercises() {
  const { data } = useGetAllExercisesQuery();
  const { exercisesData, page, bodyPart } = useSelector(exercisesSelector);

  const dispatch = useDispatch();

  // Might change later
  useEffect(
    function () {
      if (!exercisesData?.length)
        dispatch(exercisesDataSet(data?.slice(0, 20)));
    },
    [data, exercisesData, dispatch]
  );

  console.log(exercisesData);
  console.log(page);

  function paginate(e, value) {
    dispatch(pageSelected(value));
  }

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
        {exercisesData?.slice(0, 16)?.map((exercise) => (
          <ExerciseCard exercise={exercise} key={exercise.id} />
        ))}
      </Grid>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mt: { xs: '36px', md: '48px' },
        }}
      >
        <Pagination
          shape='rounded'
          variant='outlined'
          color='error'
          defaultPage={1}
          page={page}
          count={10}
          onChange={paginate}
        />
      </Box>
    </Box>
  );
}

export default Exercises;
