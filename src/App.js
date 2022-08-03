import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default App;
