import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import { UserProvider } from './contexts/UserContext';
import PrivateRoute from './components/PrivateRoute/index.js';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Serie from './pages/Serie';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          } />
          <Route path='/serie/:id' element={
            <PrivateRoute>
              <Serie />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default App;
