import { Box, Grid, Pagination, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  exercisesDataSet,
  exercisesSelector,
  indexOfFirstExerciseSet,
  indexOfLastExerciseSet,
  pageSelected,
} from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';
import { ExerciseCard } from './';

function Exercises() {
  const { data } = useGetAllExercisesQuery();
  const {
    exercisesData,
    page,
    bodyPart,
    indexOfFirstExercise,
    indexOfLastExercise,
  } = useSelector(exercisesSelector);

  console.log(indexOfFirstExercise, indexOfLastExercise);

  const dispatch = useDispatch();

  const exercisesPerPage = 15;

  // Might change later
  useEffect(
    function () {
      if (!exercisesData?.length) dispatch(exercisesDataSet(data));
    },
    [data, exercisesData, dispatch]
  );

  function paginate(e, value) {
    dispatch(pageSelected(value));

    dispatch(indexOfFirstExerciseSet((value - 1) * exercisesPerPage));
    dispatch(indexOfLastExerciseSet(value * exercisesPerPage));
  }

  return (
    <Box id='exercises' sx={{ mt: { xs: '36px', lg: '96px' } }} p='20px'>
      <Typography variant='h3' mb='36px'>
        Showing Results
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: 'center',
        }}
      >
        {exercisesData
          ?.slice(indexOfFirstExercise, indexOfLastExercise)
          ?.map((exercise) => (
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
          count={Math.ceil(exercisesData?.length / exercisesPerPage)}
          onChange={paginate}
        />
      </Box>
    </Box>
  );
}

export default Exercises;
