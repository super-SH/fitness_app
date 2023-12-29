import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

function ExerciseCard({ exercise }) {
  const navigate = useNavigate();

  return (
    <Grid
      item
      key={exercise.id}
      xs={9}
      md={6}
      lg={4}
      xl={3}
      onClick={() => navigate(`/exercise/${exercise.id}`)}
      sx={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className='exercise-card'
    >
      <img
        src={exercise?.gifUrl}
        alt={exercise.name}
        loading='lazy'
        style={{ padding: '4px' }}
      />
      <Typography
        maxWidth='80%'
        textTransform='capitalize'
        fontWeight='700'
        fontSize='24px'
        pb='12px'
        textOverflow='ellipsis'
        overflow='hidden'
        whiteSpace='nowrap'
      >
        {exercise?.name}
      </Typography>
    </Grid>
  );
}

export default ExerciseCard;
