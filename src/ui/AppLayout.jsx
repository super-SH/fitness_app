import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import { Footer, NavBar } from '../components';

function AppLayout() {
  return (
    <Box width='100%' p='16px'>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Box>
  );
}

export default AppLayout;
