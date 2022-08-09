import styled from "styled-components"

export default function CardSerie(){
  return(
    <Box>
      <img className='desktop' src='https://img1.ak.crunchyroll.com/i/spire2/945aa523c5e30d33653fca83dbd6e27e1600049449_main.png'/>
      <img className='mobile' src='https://lh3.googleusercontent.com/ELDkpiL2B0cTHxDHXM7c-8Bfs2HXhaorIUkjtW6Dup54_iO_OVE8Jbs-McyWJvxJgavrYZKe_bwcSWTeryepiV8ztXnOzVxhMZoWxm1Pfq8ZYsgQvpUetqVT2cGMzaZ71oSTyD20' /> 
    </Box>
  )
}

const Box = styled.div`
  width: 250px;
  margin: 0 5px;
  box-shadow: 0 0 20px 2px rgba(0,0,0,0.1);
  transition: 0.7s;
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