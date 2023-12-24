import { Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
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
            borderBottom: '3px solid #ff2526',
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
