import styled from 'styled-components';
import { useEffect, useContext, useState } from 'react';

import Carousel from './Carousel';
import CardSerie from './CardSerie';
import { UserContext } from '../../contexts/UserContext';

import requestCategoryApi from '../../services/api/categories';

export default function Categories(){
  const [ categories, setCategories ] = useState([]);

  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  }

  useEffect(() => {
    const promise = requestCategoryApi.getCategoriesSeries(config);
    promise.then((response) => {
      const { data } = response;
      setCategories(data);
    })
    promise.catch((e) => {
      console.log(e);
    })
  }, []);

  return(
    <>
    {
      categories.map((category) => {
        const { name, categorySerie } = category;
        return(
          <Category>
            <h3>{name}</h3>
            <Container>
              <Carousel>
                {
                  categorySerie.map((item) => {
                    const serie = item.serie;
                    const { id, imageUrl, bigImageUrl } = serie;
                    return(
                      <CardSerie id={id} imageUrl={imageUrl} bigImageUrl={bigImageUrl}/>
                    );
                  })
                }
              </Carousel>
            </Container>
          </Category>
        );
      })
    }
    </>
  );
}

const Category = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  h3 {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 500;
    margin-left: 40px;
  }
`

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  color: #FFFFFF;
  padding: 0px 10px;
`

