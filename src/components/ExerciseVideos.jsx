import React from 'react';
import { useGetYoutubeVideosByNameQuery } from '../services/youtubeSearchApi';
import { useSelector } from 'react-redux';
import { exercisesSelector } from '../features/exercisesSlice';
import { Box, Link, Stack, Typography } from '@mui/material';

function ExerciseVideos() {
  const { selectedExerciseName } = useSelector(exercisesSelector);
  const { data: exerciseVideosData } =
    useGetYoutubeVideosByNameQuery(selectedExerciseName);

  console.log(exerciseVideosData?.contents);

  return (
    <Box sx={{ mt: { xs: '24px', lg: '96px' }, p: '24px' }}>
      <Typography
        variant='h4'
        mb='16px'
        fontWeight='600'
        sx={{
          fontSize: { xs: '24px', sm: '32px', md: '40px', lg: '48px' },
          mb: { xs: '18px', sm: '24px', md: '36px' },
        }}
      >
        Watch{' '}
        <span style={{ color: '#d40000', textTransform: 'capitalize' }}>
          {selectedExerciseName}
        </span>{' '}
        exercise videos
      </Typography>
      <Stack
        flexWrap='wrap'
        justifyContent='flex-start'
        alignItems='center'
        sx={{
          flexDirection: { lg: 'row' },
          gap: { xs: '12px', lg: '64px' },
        }}
      >
        {exerciseVideosData?.contents?.slice(0, 3)?.map((video, i) => (
          <Link
            key={i}
            href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            underline='none'
            display='flex'
            flexDirection='column'
            color='#000'
            sx={{
              gap: { xs: '12px', sm: '16px', md: '24px' },
              width: { xs: '220px', sm: '320px', md: '360px' },
            }}
          >
            <img
              src={video.video?.thumbnails[0]?.url}
              alt={video.video.title}
            />
            <Box>
              <Typography
                fontWeight='500'
                sx={{ fontSize: { xs: '20px', sm: '24px' } }}
              >
                {video.video.title}
              </Typography>
              <Typography
                fontWeight='500'
                sx={{ fontSize: { xs: '14px', sm: '18px' } }}
                color='#444'
              >
                {video.video.channelName}
              </Typography>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
