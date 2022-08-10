import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from '../../contexts/UserContext';

import requestSerieApi from '../../services/api/series';

import BasicButtons from './Button';

export default function Banner() {
  const [ banner, setBanner ] = useState({name:'', description:'', bannerUrl: ''});

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  }

  useEffect(() => {
    const promise = requestSerieApi.getRandom(config);
    promise.then((response) => {
      const {data} = response;
      setBanner(data[0]);
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, []);
  
  return(
    <Container banner={banner.bannerUrl}>
      <div className='text' >
        <div>
          <h3>{banner.name}</h3>
          <p>{banner.description}</p>
        <BasicButtons serieId={banner.id}/>
        </div>
      </div>
      <div className='image'>
        <img src={banner.bannerUrl} alt={banner.name}/>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 80px;
  align-items: center;
  width: 100vw;
  height: 50vh;
  color: #FFFFFF;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(34, 113, 179, 0.3), rgba(0, 0, 0, 0.3));
  background-size: cover;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    padding-left: 70px;
    padding-right: 80px;
    width: 45vw;
    height: 100%;
    h3 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
      font-weight: 500;
    }
  }
  .image {
    width: 55vw;
    height: 100%;
    padding: 10px;
    padding-right: 70px;
    img{
      height: 100%;
      width: 100%; 
      border-radius: 5px;
    }
  }

  @media (max-width: 1000px){
    height: 30vh;
    .image {
      display: none;
    }
    .text {
      width: 100%;
      padding-left: 20px;
      background: ${(props) => `linear-gradient(rgba(0, 0, 0, 1), rgba(34, 113, 179, 0.4), rgba(0, 0, 0, 1)), url(${props.banner})`};
      background-size: cover;
      div {
        width: 300px;
      }
    }
  }
`

