import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from './../../contexts/UserContext';

const PrivateRoute = ({children}) => {
  const { user } = useContext(UserContext);

  if(Object.keys(user).length === 0){
    alert('Você será redirecionado');
    return <Navigate to='/'/>
  }

  return children;
}

export default PrivateRoute;