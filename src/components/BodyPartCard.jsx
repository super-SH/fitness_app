import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Stack, Typography } from '@mui/material';

import {
  bodyPartSelected,
  exercisesDataSet,
  exercisesSelector,
} from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';
import Icon from '../assets/icons/gym.png';

function BodyPartCard({ item }) {
  const { data: exercises } = useGetAllExercisesQuery();
  const { bodyPart } = useSelector(exercisesSelector);

  const dispatch = useDispatch();

  function handleSelectBodyPart() {
    dispatch(bodyPartSelected(item));

    if (item === 'all') {
      dispatch(exercisesDataSet(exercises));
    } else {
      dispatch(
        exercisesDataSet(
          exercises?.filter((exercise) => exercise.bodyPart === item)
        )
      );
    }
  }

  return (
    <Box
      sx={{
        my: { xs: '2px' },
        mx: '0',
      }}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
          boxShadow: bodyPart === item ? 'inset 0px 6px  #D40000' : '',
          backgroundColor: '#efefef',
          width: { xs: '96px', sm: '132px', md: '160px', lg: '260px' },
          height: { xs: '96px', sm: '132px', md: '160px', lg: '270px' },
          gap: { xs: '4px', lg: '24px' },
        }}
        onClick={handleSelectBodyPart}
      >
        <img
          src={Icon}
          alt='red gym icon'
          style={{ width: '28px', height: '28px' }}
        />
        <Typography
          fontWeight='700'
          color='#3a1212'
          sx={{ fontSize: { xs: '16px', md: '22px', lg: '32px' } }}
        >
          {item}
        </Typography>
      </Stack>
    </Box>
  );
}

export default BodyPartCard;
