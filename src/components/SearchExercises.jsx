import {
  Box,
  Button,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  exercisesSelector,
  searchTermChanged,
} from '../features/exercisesSlice';
import { HorizontalScroll } from './';
// import {
//   useGetBodyPartsListQuery,
//   useGetExercisesQuery,
// } from '../services/exerciseDBApi';

function SearchExercises() {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector(exercisesSelector);
  // const { data } = useGetBodyPartsListQuery();
  // const { data: exercises } = useGetExercisesQuery();

  function handleSearch() {
    console.log('clicked');
    if (!searchTerm) return;
    console.log(searchTerm);
    // console.log(data);
    // console.log(exercises);
  }

  return (
    <Stack
      alignItems='center'
      justifyContent='center'
      mt='32px'
      gap='32px'
      p='20px'
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
      <Box sx={{ width: '100%', p: '20px' }}>
        <HorizontalScroll />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
