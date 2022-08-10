import { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Header from "../components/Header";
import SimpleAccordion from "../components/Accordion";
import { UserContext } from "../contexts/UserContext";
import requestSerieApi from "../services/api/series";

export default function Serie(){
  const [ serie, setSerie ] = useState({name: '', imageUrl: '', description: '', season:[]});

  const { idSerie } = useParams();

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  }

  useEffect(() => {
    const promise = requestSerieApi.getById(idSerie, config);
    promise.then((response) => {
      const { data } = response;
      setSerie(data);
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, []);

  return(
    <>
      <Header />
      {
        serie ? 
        <SerieContainer>
        <div className='serie'>
          <img src={serie.imageUrl}/>
          <div>
            <h3>{serie.name}</h3>
            <p>{serie.description}</p>
            <p><FavoriteBorderIcon />Favoritar</p>
          </div>
        </div>
        <div className='season'>
          <SimpleAccordion seasons={serie.season} serieName={serie.name}/>
        </div>
      </SerieContainer>
        :<></> 
      }
    </>
  );
}

const SerieContainer = styled.div`
  display: flex;
  padding: 160px 100px 80px 100px;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(34, 113, 179, 0.3), rgba(0, 0, 0, 0.3));
  .serie{
    width: 60vw;
    display: flex;
    align-items: center ;
    img{
      width: 300px;
      height: 100%;
      border-radius: 2px;
    }
    div{
      padding: 30px;
      h3{
        font-size: 35px;
        margin-bottom: 20px;
      }
      p{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
      }
    }
  }
  .season{
    width: 40vw;
    padding-bottom: 20px;
  }

  @media (max-width: 1000px){
    flex-direction: column;
    padding: 80px 20px;
    .serie{
      margin-bottom: 20px;
      width: 100%;
      img{
        width: 180px;
        height: 250px;
      }
      div{
        padding: 5px;
        h3{
          font-size: 25px;
        }
        p{
          font-size: 15px;
        }
      }
    }
    .season{
      width: 100%;
    }
  }
`

