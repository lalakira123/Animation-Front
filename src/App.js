import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import { UserProvider } from './contexts/UserContext';

import SignUp from './pages/SignUp';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default App;
