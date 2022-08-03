import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [ user, setUser ] = useState(useLocalStorage);

  function useLocalStorage(){
    const localToken =  JSON.parse(localStorage.getItem('user') || '{}');
    if(localToken) return localToken;
  }

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  );
}