import styled from "styled-components"

export default function CardSerie(){
  return(
    <Box>
      <img className='desktop' src='https://c4.wallpaperflare.com/wallpaper/212/95/712/castlevania-alucard-castlevania-sypha-belnades-trevor-belmont-wallpaper-preview.jpg'/>
      <img className='mobile' src='https://br.web.img2.acsta.net/pictures/21/05/10/23/27/0599462.jpg' /> 
    </Box>
  )
}

const Box = styled.div`
  width: 250px;
  margin: 0 5px;
  box-shadow: 0 0 20px 2px rgba(0,0,0,0.1);
  transition: 0.7s;
  img{
    border-radius: 2px;
  }
  .desktop{
    display: block;
    width: 250px;
    height: 150px;
  }
  .mobile{
    display: none;
  }
  :hover {
    transform: scale(1.2);
    z-index: 2;
  }

  @media (max-width: 800px){
    .mobile{
      display: block;
      width: 100px;
      height: 150px;
    }
    .desktop{
      display: none;
    }
  }
`