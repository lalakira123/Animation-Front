import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from './../../contexts/UserContext';

import SwipeableTemporaryDrawer from "./Drawer";

function Header(){
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  return(
    <HeaderContainer>
      <div className="left"> 
        <h1 onClick={() => navigate('/series')}>Animation</h1>
        <nav>
          <p onClick={() => navigate('/series')}>Home</p>
          <p onClick={() => navigate('/favorites')}>Favoritos</p>
        </nav>
      </div>
      <div className="right">
        <Avatar className='avatar' alt={user.name} src={user.imageUrl} sx={{width: 50, height: 50}} />
        <SwipeableTemporaryDrawer />
      </div>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 80px;
  padding: 30px;
  color: #FFFFFF;
  .left {
    display: flex;
    justify-content: space-between;
    width: 500px;
    h1 {
      font-weight: 700;
      font-size: 40px;
    }
    h1:hover {
      cursor: pointer;
    }
    nav {
      display: flex;
      width: 200px;
      align-items: center;
      justify-content: space-between;
      p:hover{
        cursor: pointer;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px
  }

  @media (max-width: 800px){
    .left{
      nav{
        display: none;
      }
    }
    .right{
      flex-direction: row-reverse;
      .avatar{
        display: none;
      }
    }
  }
`