import styled from "styled-components"
import { useNavigate } from "react-router-dom"

export default function CardSerie({id, imageUrl, bigImageUrl}){
  const navigate = useNavigate();

  return(
    <Box onClick={() => navigate(`/serie/${id}`)}>
      <img className='desktop' src={bigImageUrl}/>
      <img className='mobile' src={imageUrl}/> 
    </Box>
  )
}

const Box = styled.div`
  margin: 0 5px;
  box-shadow: 0 0 20px 2px rgba(0,0,0,0.1);
  transition: 0.7s;
  :hover{
    cursor: pointer;
  }
  img{
    border-radius: 2px;
  }
  .desktop{
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
    .desktop{
      display: none;
    }
    .mobile{
      display: block;
      width: 100px;
      height: 150px;
    }
  }
`