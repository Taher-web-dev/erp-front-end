// import { useEffect } from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Splash from './components/Splash/splash';
import Login from './components/Login/login';
import { fetchStorage, checkSession } from './helpers';
import './App.css';
import Home from './components/Home/home';

function App() {
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  checkSession(fetchStorage(), dispatch);
  return (
    <Router>
      <Routes>
        <Route path="/" element={session ? <Home /> : <Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
