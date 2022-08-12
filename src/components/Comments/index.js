import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';

import { useContext } from 'react'; 
import { UserContext } from '../../contexts/UserContext';
import requestCommentApi from '../../services/api/comment';

export default function CardComment({id, comment, userInfo, update, setUpdate}){
  const { user } = useContext(UserContext);
  const config = {
    headers: {Authorization: `Bearer ${user.token}`}
  };

  function deleteComment(){
    const promise = requestCommentApi.deleteComment(id, config);
    promise.then((response) => {
      console.log(response.data);
      setUpdate(update+1);
    });
    promise.catch((e) => {
      console.log(e);
    });
  }

  return(
    <CardContainer>
      <Stack direction="row" spacing={2}>
        <Avatar alt="user" src={userInfo.imageUrl} />
      </Stack>
      <div className='info'>
        <h4>{userInfo.name} 
          {
            user.userId === userInfo.id ? 
            <DeleteIcon onClick={deleteComment} sx={{fontSize: 12}}/>
            :
            <></>
          }
        </h4>
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