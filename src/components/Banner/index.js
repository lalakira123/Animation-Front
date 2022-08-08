import styled from 'styled-components';

import BasicButtons from './Button';

export default function Banner() {
  return(
    <Container>
      <div className='text'>
        <div>
          <h3>Jujutsu Kaisen</h3>
          <p>Jujutsu Kaisen é mais um sucesso da consagrada Shonen Jump.
          Falando de forma grosseira, a série é um "Naruto Dark". A formula de sucesso segue se renovando e com o sucesso de títulos como Shingeki no Kyojin e Tokyo Ghoul, todo ar sobrenatural e violência foram incorporadas.</p>
        <BasicButtons />
        </div>
      </div>
      <div className='image'>
        <img src='https://ovicio.com.br/wp-content/uploads/2020/08/20200819-the-jujutsu-kaisen-anime-is-heading-to-crunchyroll-this-october.png' />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50vh;
  color: #FFFFFF;
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
    padding-left: 70px;
    padding-right: 80px;
    width: 45vw;
    height: 100%;
    h3 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 20px;
      font-weight: 500;
    }
  }
  .image {
    width: 55vw;
    height: 100%;
    padding: 10px;
    padding-right: 70px;
    img{
      height: 100%;
      width: 100%; 
    }
  }

  @media (max-width: 1000px){
    .image {
      display: none;
    }
    .text {
      width: 100%;
      padding-left: 20px;
      background-image: url('https://ovicio.com.br/wp-content/uploads/2020/08/20200819-the-jujutsu-kaisen-anime-is-heading-to-crunchyroll-this-october.png');
      background-size: cover;
      div {
        width: 300px;
      }
    }
  }
`

