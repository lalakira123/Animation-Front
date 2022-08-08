import Header from './../components/Header';
import Banner from '../components/Banner';

import styled from 'styled-components';

function Series(){
  return(
    <>
      <Header />
      <Banner />
    </>
  );
}

export default Series;

const Margin = styled.div`
  padding: 0px 40px;
`