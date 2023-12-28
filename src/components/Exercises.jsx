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
import { ExerciseCard, Loader } from './';

function Exercises() {
  const { data, isFetching } = useGetAllExercisesQuery();
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

  if (isFetching) return <Loader />;

  return (
    <Box id='exercises' sx={{ mt: { xs: '36px', lg: '96px' } }} p='20px'>
      <Typography variant='h3' mb='36px'>
        Showing Results
      </Typography>
      <Grid
        container
        sx={{
          justifyContent: { xs: 'center', md: 'flex-start' },
          alignItems: 'center',
          gap: { xs: '4px', sm: '12px', md: '16px', lg: '24px' },
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
