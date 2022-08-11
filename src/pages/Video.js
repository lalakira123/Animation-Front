import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import Header from "../components/Header";
import { UserContext } from '../contexts/UserContext';
import requestEpisodeApi from '../services/api/episode';
import requestCommentApi from '../services/api/comment';

export default function Video(){
  const [ episode, setEpisode ] = useState({});
  const [ nextAndPrevious, setNextAndPrevious ] = useState({});
  const [ comment, setComment ] = useState();
  const [ loading, setLoading ] = useState(false);

  const { idVideo } = useParams();
  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  }
  
  useEffect(() => {
    const promise = requestEpisodeApi.getEpisodeById(idVideo, config);
    promise.then((response) => {
      const { data } = response;
      setEpisode(data);
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, [idVideo]);

  useEffect(() => {
    const promise = requestEpisodeApi.getPreviousAndNextEpisode(idVideo, config);
    promise.then((response) => {
      const { data } = response;
      setNextAndPrevious(data);
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, [episode]);

  function handlePostComment(){
    setLoading(true);
    const promise = requestCommentApi.createComment({comment: comment, episodeId: episode.id}, config);
    promise.then((response) => {
      console.log(response.data);
      setLoading(false);
    });
    promise.catch((e) => {
      setLoading(false);
      console.log(e);
    })
  }
  
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
          {
            Object.values(nextAndPrevious).length > 0 ?
              <div className='next-and-previous'>
                {
                  nextAndPrevious.previous > 0 ? 
                    <div className='previous' onClick={() => navigate(`/video/${nextAndPrevious.previous}`)}>
                      <ArrowBackIosNewIcon />
                      <p>Anterior</p>
                    </div>
                  :
                  <p> </p>
                }
                {
                  nextAndPrevious.next > 0 ?
                    <div className='next' onClick={() => navigate(`/video/${nextAndPrevious.next}`)}>
                      <p>Próximo</p>
                      <ArrowForwardIosIcon />
                    </div>
                  :
                  <p> </p>
                }
              </div>
              :
              <></>
          }
          <video key={episode.id} width="100%" height="80%" controls controlsList="nodownload">
            <source 
              src={
                `https://adfmqwzqmoevvtvgkqzg.supabase.co/storage/v1/object/public/video/${episode.season?.serie.name.replace(' ', '')}/S${episode.season.number}.E${episode.number}-${episode.season.serie.name.replace(' ', '')}.mp4`
              }
              type="video/mp4" 
            />
          </video>
          <p className='visualization'>{episode.views} Visualizações</p>
        </div>
        <div className='comments'>
          <div className='input'>
            <Stack direction="row" spacing={2}>
              <Avatar alt="user" src={user.imageUrl} />
            </Stack>
            <input 
              placeholder='Comente algo!' 
              onChange={(e) => setComment(e.target.value)}
              type='text'
              required
              disabled={loading}
            />
            <button onClick={handlePostComment}>Enviar</button>
          </div>
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
  padding: 120px 100px 100px 100px;
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
    padding: 0px 35px 0px 35px;
    .title{
      h3{
        font-size: 30px;
        margin-bottom: 5px;
      }
      p{
        font-size: 15px;
      }
    }
    .next-and-previous{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      margin-bottom: 10px;
      .next{
        cursor: pointer;
        display: flex;
        align-items: center;
      }
      .previous{
        cursor: pointer;
        display: flex;
        align-items: center;
      }
    }
    video{
      margin-bottom: 10px;
    }
  }
  .comments{
    position: relative;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 10px;
    width: 45%;
    height: 100%;
    .input{
      position: absolute;
      bottom: 0;
      padding: 10px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background-color: #000000;
      input{
        width: 90%;
        border-radius: 20px;
      }
    }
  }

  @media (max-width: 1000px){
    flex-direction: column;
    padding: 90px 10px;
    align-items: center;
    height: 1000px;
    .video{
      width: 100%;
      video{
        width: 100%;
        height: 100%;
      }
    }
    .comments{
      width: 80%;
      height: 100%;
      margin-top: 40px;
    }
  }
`

