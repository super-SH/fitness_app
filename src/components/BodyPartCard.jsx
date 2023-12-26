import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import Icon from '../assets/icons/gym.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  bodyPartSelected,
  exercisesSelector,
} from '../features/exercisesSlice';

function BodyPartCard({ item }) {
  const { bodyPart } = useSelector(exercisesSelector);

  const dispatch = useDispatch();

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
        onClick={() => {
          dispatch(bodyPartSelected(item));
        }}
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
