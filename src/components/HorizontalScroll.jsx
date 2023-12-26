import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import BodyPartCard from './BodyPartCard';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const dummies = ['all', 'lowerleg', 'upperleg', 'chest', 'back', 'neck', 'arm'];

function HorizontalScroll() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {dummies.map((part, i) => (
        <BodyPartCard key={part} item={part} itemId={i} title={i} />
      ))}
    </ScrollMenu>
  );
}

export default HorizontalScroll;

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

  return (
    <Box
      as='button'
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      className='left-arrow'
    >
      <img src={LeftArrowIcon} alt='left-arrow' />
    </Box>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

  return (
    <Box
      as='button'
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      className='right-arrow'
    >
      <img src={RightArrowIcon} alt='right-arrow' />
    </Box>
  );
}