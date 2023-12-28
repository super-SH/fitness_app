import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import Icon from '../assets/icons/gym.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  bodyPartSelected,
  exercisesDataSet,
  exercisesSelector,
  pageSelected,
} from '../features/exercisesSlice';
import { useGetAllExercisesQuery } from '../services/exerciseDBApi';

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
        m: '0 24px',
      }}
    >
      <Stack
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{
          boxShadow: bodyPart === item ? 'inset 0px 6px  #D40000' : '',
          backgroundColor: '#efefef',
          width: '260px',
          height: '270px',
          gap: '36px',
        }}
        onClick={handleSelectBodyPart}
      >
        <img
          src={Icon}
          alt='red gym icon'
          style={{ width: '36px', height: '36px' }}
        />
        <Typography fontSize='26px' fontWeight='700' color='#3a1212'>
          {item}
        </Typography>
      </Stack>
    </Box>
  );
}

export default BodyPartCard;
