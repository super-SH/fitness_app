import React from 'react';
import { styled } from '@mui/material';

import LogoImg from '../assets/images/Logo.png';

const StyledLogo = styled('img')(({ theme }) => ({
  width: '48px',
  height: '48px',
  margin: '0 20px',
}));

function Logo() {
  return <StyledLogo src={LogoImg} alt='logo' />;
}

export default Logo;
