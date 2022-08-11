import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function CardComment({id, comment, user}){
  return(
    <CardContainer>
      <Stack direction="row" spacing={2}>
        <Avatar alt="user" src={user.imageUrl} />
      </Stack>
      <div className='info'>
        <h4>{user.name}</h4>
        <p>{comment}</p>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  .info{
    margin-left: 20px;
    h4{
      margin-bottom: 5px;
    }
  }
`