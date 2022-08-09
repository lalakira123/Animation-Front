import styled from 'styled-components';

import Carousel from './Carousel';
import CardSerie from './CardSerie';

export default function Categories(){
  return(
    <>
    <Category>
      <h3>Ação</h3>
      <Container>
        <Carousel>
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
        </Carousel>
      </Container>
    </Category>
    <Category>
      <h3>Comédia</h3>
      <Container>
        <Carousel>
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
          <CardSerie />
        </Carousel>
      </Container>
    </Category>
    </>
  );
}

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  h3 {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    margin-left: 40px;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  color: #FFFFFF;
  padding: 0px 10px;
`

