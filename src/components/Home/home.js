import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';
import SignOut from './sign_out';
import LOGO from '../../assets/images/logo.jpg';
import { getPhotoProfileFIle } from '../../helpers';
import './home.css';

const Home = () => {
  const file = getPhotoProfileFIle();
  const [date, setDate] = useState(new Date());
  const updateState = () => (setDate(new Date()));
  const updateDate = () => (setInterval(updateState, 60000));
  const [disp, setDisp] = useState(false);
  const signOut = () => {
    setDisp(true);
    const home = document.querySelector('.home-wrapper');
    home.addEventListener('click', (event) => {
      const { target } = event;
      if (target.closest('.Sign-out-wrapper')) {
        return;
      }
      setDisp(false);
    });
  };
  updateDate();
  return (
    <div className="home-wrapper">
      <header className="header">
        <div className="time-data">
          <Typography variant="h6" style={{ color: 'rgb(100,64,90)' }}>
            {`Date: ${date.toDateString()}`}
          </Typography>
          <Typography variant="h6" style={{ color: 'rgb(100,64,90)' }}>{`Time: ${date.toLocaleTimeString()}`}</Typography>
        </div>
        <img src={LOGO} alt="logo-img" className="logo-img" />
        <div className="logout-part" onClick={signOut} aria-hidden="true">
          <img src={`./Users/${file}`} alt="img-current-user" className="user-photo" />
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </header>
      <div className="seperators" style={{ display: 'flex' }}>
        <hr className="sep" style={{ backgroundColor: 'rgb(100,64,90)', color: 'rgb(100,64,90)' }} />
        <hr className="sep" style={{ backgroundColor: 'rgb(15,90,94)', color: 'rgb(15,90,94)' }} />
        <hr className="sep" style={{ width: '34%', backgroundColor: 'red', color: 'red' }} />
      </div>
      <h2 className="functionnalities"> Fonctions Principales</h2>
      <SignOut disp={disp} />
    </div>
  );
};
export default Home;
