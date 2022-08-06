import styled from "styled-components";

function Header(){
  return(
    <HeaderContainer>
      <h1>Animation</h1>
      <nav>
        <p>Home</p>
        <p>Favoritos</p>
      </nav>
      <p>LOGOFF</p>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 12vh;
  padding: 20px;
  color: #FFFFFF;
  h1{
    font-weight: 700;
    font-size: 40px;
  }
  nav{
    display: flex;
    width: 15vw;
    align-items: center;
    justify-content: space-between;
  }
`