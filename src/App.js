import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/style.css';

import { UserProvider } from './contexts/UserContext';
import PrivateRoute from './components/PrivateRoute/index.js';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Series from './pages/Series';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/series' element={
            <PrivateRoute>
              <Series />
            </PrivateRoute>
          } />
        </Routes>
      </BrowserRouter>
    </UserProvider>  
  );
}

export default App;
