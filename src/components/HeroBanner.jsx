import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import HeroBannerimage from '../assets/images/banner.png';

function HeroBanner() {
  return (
    <Box
      sx={{ mt: { xs: '58px', lg: '108px', xl: '160px' }, ml: { sm: '48px' } }}
      position='relative'
      p='20px'
    >
      <Typography fontSize='24px' color='#D40000' fontWeight='600' mb='24px'>
        Fitness Club
      </Typography>
      <Typography
        fontWeight='700'
        sx={{ fontSize: { xs: '36px', lg: '44px' } }}
        mb='20px'
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '16px', sm: '20px' },
          maxWidth: { xs: '300px', sm: '400px' },
        }}
        mb='28px'
      >
        Check out the most effective exercises personalized to you
      </Typography>

      {/* Color =error is temporary */}
      <Button
        variant='contained'
        color='error'
        href='#exercises'
        sx={{ padding: '10px 20px' }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight='600'
        fontSize='180px'
        sx={{ opacity: 0.1, display: { xs: 'none', lg: 'block' } }}
        color='#ff2526'
        mt='108px'
      >
        Excercises
      </Typography>
      <img
        src={HeroBannerimage}
        alt='fitness girl'
        className='hero-banner-img'
      />
    </Box>
  );
}

export default HeroBanner;
