import { useRef } from 'react';
import styled from 'styled-components';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Carousel({children}){
  const carousel = useRef(null);

  function handleLeftClick(e){
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }

  function handleRightClick(e){
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return(
    <>
      <Button onClick={handleLeftClick}><ArrowBackIosNewIcon color='primary'/></Button>
      <CarouselContainer ref={carousel}>
        {children}
      </CarouselContainer>
      <Button onClick={handleRightClick}><ArrowForwardIosIcon color='primary'/></Button>
    </>
  );
}

const Button = styled.button`
  background-color: #000000;
  border: none;
  :hover {
    cursor: pointer;
  }
`

const CarouselContainer = styled.div`
  display: flex;
  padding: 20px 0px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  ::-webkit-scrollbar{
    display: none;
  }
`

