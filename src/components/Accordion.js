import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

export default function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Temporada 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Episode>
              <img src='https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpeg'/>
              <p>1. a a a a a a aa a a a a a aa a a a aa a a a a a a aa a a a a a a</p>
            </Episode>
            <Episode>
              <img src='https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpeg'/>
              <p>1. a a a a a a aa a a a a a aa a a a aa a a a a a a aa a a a a a a</p>
            </Episode>
            <Episode>
              <img src='https://beta.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/f7adcedd1d7c53ae18d851003a3cfae4.jpeg'/>
              <p>1. a a a a a a aa a a a a a aa a a a aa a a a a a a aa a a a a a a</p>
            </Episode>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const Episode = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  img{
    width: 200px;
    height: 100px;
  }
  p{
    margin-left: 20px;
  }

  @media(max-width: 1000px){
    img{
      width: 150px;
      height: 100px;
    }
  }
`