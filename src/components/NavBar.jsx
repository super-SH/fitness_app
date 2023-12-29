import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import { Logo } from '../ui';

function NavBar() {
  return (
    <Stack
      direction='row'
      sx={{ mt: { xs: '16px', sm: '24px' }, gap: { xs: '40px', sm: '108px' } }}
    >
      <Link to='/'>
        <Logo />
      </Link>
      <Stack
        direction='row'
        alignItems='flex-end'
        sx={{ fontSize: { xs: '16px', sm: '24px' } }}
        spacing={5}
      >
        <Link
          to='/home'
          style={{
            textDecoration: 'none',
            color: '#3a1212',
            boxShadow: 'inset 0px -2px  #D40000',
          }}
        >
          Home
        </Link>
        <a
          href='#exercises'
          style={{
            textDecoration: 'none',
            color: '#3a1212',
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
}

export default NavBar;
