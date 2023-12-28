import React, { useState } from 'react';
import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  exercisesDataSet,
  exercisesSelector,
  searchTermChanged,
} from '../features/exercisesSlice';
import { HorizontalScroll } from './';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';

function SearchExercises() {
  const dispatch = useDispatch();
  const { searchTerm, indexOfFirstExercise, indexOfLastExercise } =
    useSelector(exercisesSelector);
  const { data: exercises } = useGetAllExercisesQuery();

  function handleSearch() {
    if (!searchTerm) return;

    const searchedExercises = exercises?.filter(
      (exercise) =>
        exercise.bodyPart.toLowerCase().includes(searchTerm) ||
        exercise.equipment.toLowerCase().includes(searchTerm) ||
        exercise.name.toLowerCase().includes(searchTerm) ||
        exercise.target.toLowerCase().includes(searchTerm)
    );

    dispatch(exercisesDataSet(searchedExercises));
    dispatch(searchTermChanged(''));
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='32px'
      gap='32px'
      sx={{ p: { xs: '4px', sm: '8px', lg: '22px' } }}
    >
      <Typography
        sx={{ fontSize: { xs: '28px', lg: '42px' } }}
        fontWeight={700}
        textAlign='center'
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      {/* Color error are temporary , change later */}
      <TextField
        hiddenLabel
        variant='filled'
        placeholder='Search Exercises'
        type='text'
        color='error'
        value={searchTerm}
        onChange={(e) =>
          dispatch(searchTermChanged(e.target.value.toLowerCase()))
        }
        sx={{
          input: {
            fontWeight: '700',
            border: 'none',
          },
          width: { xs: '324px', lg: '966px' },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Button
                variant='contained'
                color='error'
                sx={{ height: '48px' }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </InputAdornment>
          ),
        }}
      />
      <Box sx={{ width: '100%', p: { xs: '6px', lg: '20px' } }}>
        <HorizontalScroll />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
