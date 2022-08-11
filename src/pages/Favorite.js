import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from "../components/Header";

import { UserContext } from '../contexts/UserContext';
import requestFavoriteApi from '../services/api/favorites';

export default function Favorite(){
  const [ favorites, setFavorites ] = useState([]);

  const navigate = useNavigate();

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  };
  console.log(favorites);
  useEffect(() => {
    const promise = requestFavoriteApi.listFavorites(config);
    promise.then((response) => {
      const { data } = response;
      setFavorites(data); 
    });
    promise.catch((e) => {
      console.log(e);
    })
  }, []);

  return(
    <>
      <Header />
      <FavoriteContainer>
        <h3>Favoritos</h3>
        <div>
          {
            favorites.length > 0 ?
            favorites.map((item) => {
              return(
                <div className='image'onClick={() => navigate(`/serie/${item.serie.id}`)}>
                  <img className='desktop' src={item.serie.bigImageUrl}/>
                  <img className='mobile' src={item.serie.imageUrl}/>
                </div>
              )
            })
            :
            <p>Você ainda não favoritou nenhuma série, favorite uma!</p>
          }
        </div>
      </FavoriteContainer>
    </>
  );
}

const FavoriteContainer = styled.div`
  width: 100vw;
  padding: 160px 160px 0px 160px;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(34, 113, 179, 0.3), rgba(0, 0, 0, 0.3));
  color: #FFFFFF;
  h3{
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-right: 20px;
    .image{
      transition: 0.7s;
      img{
        cursor: pointer;
        width: 350px;
        height: 200px;
        margin-bottom: 20px;
        border-radius: 2px;
      }
      .mobile{
        display: none;
      }
    }
    .image:hover {
      transform: scale(1.2);
      z-index: 2;
    }
    p{
      font-size: 20px;
      font-weight: 400;
    }
  }

  @media (max-width: 1000px){
    padding: 80px 10px 80px 10px;
    div{
      .image{
        .desktop{
          display: none
        }
        .mobile{
          display: block;
        }
        img{
            width: 100px;
            height: 150px;
        }
      }
    }
  }
`