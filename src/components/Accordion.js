import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';
import VideoThumbnail from 'react-video-thumbnail';

export default function SimpleAccordion({seasons, serieName}) {
  const unitSerieName = serieName?.replace(' ', '');

  return (
    <div>
      {
        seasons.map((season) => {
          const { number, episode } = season;
          const serieNumber = number;
          return(
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
              <Typography><b>Temporada {number}</b></Typography>
              </AccordionSummary>
                <AccordionDetails>
                <Typography>
                  {
                    episode.map((item) => {
                      const { id, name, number } = item;
                      return(
                        <Episode>
                          <VideoThumbnail
                            videoUrl={`https://adfmqwzqmoevvtvgkqzg.supabase.co/storage/v1/object/public/video/${unitSerieName}/S${serieNumber}.E${number}-${unitSerieName}.mp4`}
                            snapshotAtTime={500}
                            width={3000}
                          />
                          <p>{number}. {name}</p>
                        </Episode>
                      )
                    })
                  }
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
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