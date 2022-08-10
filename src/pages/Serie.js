import styled from "styled-components";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import Header from "../components/Header";
import SimpleAccordion from "../components/Accordion";

export default function Serie(){
  return(
    <>
      <Header />
      <SerieContainer>
        <div className='serie'>
          <img src='https://img1.ak.crunchyroll.com/i/spire3/f1fe5c7a43cb2f38f4152a58f89479821633360806_main.png'/>
          <div>
            <h3>Demon Slayer</h3>
            <p>
              Demônios massacraram sua família e amaldiçoaram sua irmã. 
              Agora Tanjiro inicia sua jornada para encontrar a cura e se vingar.
            </p>
            <p><FavoriteBorderIcon />Favoritar</p>
          </div>
        </div>
        <div className='season'>
          <SimpleAccordion />
        </div>
      </SerieContainer>
    </>
  );
}

const SerieContainer = styled.div`
  display: flex;
  padding: 160px 100px 80px 100px;
  color: #ffffff;
  height: 100vh;
  width: 100vw;
  .serie{
    width: 50vw;
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
    width: 50vw;
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

