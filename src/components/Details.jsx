import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetExerciseDetailsByIdQuery } from '../services/exerciseDBApi';
import { Box, Stack, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

import { Loader } from './';

function Details() {
  const { id } = useParams();

  const { data: exerciseDetails, isFetching } =
    useGetExerciseDetailsByIdQuery(id);

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: exerciseDetails?.bodyPart,
    },
    {
      icon: TargetImage,
      name: exerciseDetails?.target,
    },
    {
      icon: EquipmentImage,
      name: exerciseDetails?.equipment,
    },
  ];

  if (isFetching) return <Loader />;

  return (
    <Stack
      sx={{
        flexDirection: { md: 'row' },
        gap: { xs: '24px', md: '64px', lg: '96px' },
        p: '32px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src={exerciseDetails?.gifUrl} alt={exerciseDetails?.name} />
      <Stack sx={{ gap: { xs: '18px', md: '24px' } }}>
        <Typography variant='h3' textTransform='capitalize'>
          {exerciseDetails?.name}
        </Typography>
        {exerciseDetails?.instructions && (
          <Stack
            sx={{
              width: { xs: '100%', sm: '90%', lg: '75%' },
              gap: { xs: '12px', md: '22px' },
            }}
          >
            {exerciseDetails?.instructions.map((step, i) => (
              <Typography key={i}>
                {i + 1}. {step}
              </Typography>
            ))}
          </Stack>
        )}

        <Stack gap='24px' direction='row'>
          {extraDetail?.map((item, i) => (
            <Stack key={i} direction='row' gap='24px' alignItems='center'>
              <Box
                sx={{
                  background: '#FFF2DB',
                  borderRadius: '50%',
                }}
              >
                <img
                  src={item.icon}
                  alt={`icon for ${item.name}`}
                  style={{ width: '36px', height: '36px' }}
                />
              </Box>
              <Typography
                textTransform='capitalize'
                sx={{ fontSize: { xs: '16px', md: '24px' } }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Details;
