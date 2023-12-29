import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import { useGetBodyPartsListQuery } from '../services/exerciseDBApi';
import { exercisesSelector } from '../features/exercisesSlice';
import { Loader, BodyPartCard } from './';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

function HorizontalScroll() {
  const { isFetching } = useGetBodyPartsListQuery();
  const { bodyPartsList } = useSelector(exercisesSelector);

  if (isFetching) return <Loader />;

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {bodyPartsList?.map((part, i) => (
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
      py='0'
      sx={{ width: { xs: '32px' }, px: { xs: '2px', sm: '8px', lg: '20px' } }}
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
      py='0'
      sx={{ width: { xs: '32px' }, px: { xs: '2px', sm: '8px', lg: '20px' } }}
    >
      <img src={RightArrowIcon} alt='right-arrow' />
    </Box>
  );
}
