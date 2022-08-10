import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Header from "../components/Header";
import { UserContext } from '../contexts/UserContext';
import requestEpisodeApi from '../services/api/episode';

export default function Video(){
  const [ episode, setEpisode ] = useState({});

  const { idVideo } = useParams();

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  }

  useEffect(() => {
    const promise = requestEpisodeApi.getEpisodeById(idVideo, config);
    promise.then((response) => {
      const { data } = response;
      console.log(data);
      setEpisode(data);
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, []);

  return(
    <>
      <Header />
      {
        Object.values(episode).length > 0 ? 
        <VideoContainer>
        <div className='video'>
          <div className='title'>
            <h3>{episode.season.serie.name}</h3>
            <p>Temporada {episode.season?.number}: Episódio {episode.number} - {episode.name}</p>
          </div>
          <video width="660px" height="390px" controls controlsList="nodownload">
            <source 
              src={
                `https://adfmqwzqmoevvtvgkqzg.supabase.co/storage/v1/object/public/video/${episode.season?.serie.name.replace(' ', '')}/S${episode.season.number}.E${episode.number}-${episode.season.serie.name.replace(' ', '')}.mp4`
              }
              type="video/mp4" 
            />
          </video>
          <p>{episode.views} Visualizações</p>
        </div>
        <div className='comments'>

        </div>
      </VideoContainer>
      :
      <></>
      }
      
    </>
  );
}

const VideoContainer = styled.div`
  display: flex;
  padding: 120px 100px 80px 100px;
  color: #ffffff;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(34, 113, 179, 0.3), rgba(0, 0, 0, 0.9));
  video::-internal-media-controls-overflow-button{
    display: none;
  }
  .video{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    height: 100%;
    padding: 10px 35px;
    .title{
      h3{
        font-size: 30px;
        margin-bottom: 5px;
      }
      p{
        font-size: 15px;
      }
    }
  }
  .comments{
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    width: 45%;
    height: 100%;
  }

  @media (max-width: 1000px){
    flex-direction: column;
    .comments{
      width: 100%;
    }
  }
`

