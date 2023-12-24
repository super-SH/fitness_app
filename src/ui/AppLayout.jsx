import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';

function AppLayout() {
  return (
    <Box width='100%' p='16px'>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <footer>footer</footer>
    </Box>
  );
}

export default AppLayout;
