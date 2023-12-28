import { Box, Typography, Stack } from '@mui/material';

import React from 'react';
import Logo from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt='68px' bgcolor='#FFF3F4' px='36px' py='12px'>
      <Stack gap='36px' sx={{ alignItems: 'center' }} flexWrap='wrap'>
        <img src={Logo} alt='logo' style={{ width: '180px', height: '40px' }} />
      </Stack>
      <Typography
        fontWeight='500'
        sx={{ fontSize: { xs: '18px', md: '24px' } }}
        mt='32px'
        textAlign='center'
      >
        Made with ❤️ by SH
      </Typography>
    </Box>
  );
}

export default Footer;
