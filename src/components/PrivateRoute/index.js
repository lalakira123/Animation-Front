import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from './../../contexts/UserContext';

import BackDrop from '../Feedbacks/BackDrop';

const PrivateRoute = ({children}) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  if(Object.keys(user).length === 0){
    setTimeout(() => navigate('/'), 2000);
    return(
      <>
        <BackDrop />
      </>
    );
  }

  return children;
}

export default PrivateRoute;