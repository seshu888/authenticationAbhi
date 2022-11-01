import {  Route,Routes } from 'react-router-dom';
import ProtectedRoutes from './components/Auth/ProtectedRoutes';

import MainNavigation from './components/Layout/MainNavigation';
import CountryDetails from './pages/CountryDetails';

import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
    <MainNavigation/>
    <Routes>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/' element={<HomePage/>} />
            <Route path='/auth' element={<AuthPage/>} />
            <Route path='/details' element={<CountryDetails/>}/>
          </Route>
   
          <Route path='*'  element={<p>not found...</p>}/>
        </Routes>
      </div>

  );
}

export default App;
