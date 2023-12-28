import React from 'react';
import { Stack } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <Stack width='100%' alignItems='center' justifyContent='center'>
      <RotatingLines strokeColor='#d40000' ariaLabel='rotating-lines-loading' />
    </Stack>
  );
}

export default Loader;
