import React from 'react';
import LogoImg from '../assets/images/Logo.png';
import { styled } from '@mui/material';

const StyledLogo = styled('img')(({ theme }) => ({
  width: '48px',
  height: '48px',
  margin: '0 20px',
}));

function Logo() {
  return <StyledLogo src={LogoImg} alt='logo' />;
}

export default Logo;
