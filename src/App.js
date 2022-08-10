import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import { UserProvider } from './contexts/UserContext';
import PrivateRoute from './components/PrivateRoute/index.js';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Serie from './pages/Serie';
import Video from './pages/Video';

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
          <Route path='/serie/:idSerie' element={
            <PrivateRoute>
              <Serie />
            </PrivateRoute>
          } />
          <Route path='/video/:idVideo' element={
            <PrivateRoute>
              <Video />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default App;
