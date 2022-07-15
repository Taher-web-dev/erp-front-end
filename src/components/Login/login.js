import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './login.css';
import LOGO from '../../assets/images/logo.jpg';
import LoginWithCredentials, { populateStorage } from '../../helpers';

const Login = () => {
  const navigate = useNavigate();
  const h = window.innerHeight;
  const [message, setMessage] = useState('Login et gérer vos ressources depuis votre compte');
  const [variant, setVariant] = useState('info');
  const howCreateAccount = () => {
    setMessage("Veuillez contacter l'administrateur de cette application pour créer un compte");
    setVariant('warning');
  };
  const toggleShowPassword = () => {
    const show = document.querySelector('.show-password');
    const hide = document.querySelector('.hide-password');
    const passwordField = document.getElementById('password');
    if (show.style.display === 'none') {
      hide.style.display = 'none';
      show.style.display = 'block';
      passwordField.setAttribute('type', 'password');
    } else {
      hide.style.display = 'block';
      show.style.display = 'none';
      passwordField.setAttribute('type', 'text');
    }
  };
  const login = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const response = await LoginWithCredentials(username, password);
    const { status } = response;
    if (status === 'SUCCESS') {
      populateStorage(username, password);
      navigate('/home');
    } else {
      setMessage(`${response.error.message}`);
    }
  };
  return (
    <div className="login-wrapper" style={{ height: `${h}px` }}>
      <div className="login-window" style={{ height: `${h * 0.8}px`, position: 'absolute', top: `${h * 0.1}px` }}>
        <img src={LOGO} alt="logo" className="logo" />
        <Alert variant={variant} className="alert" style={{ width: '90%', marginLeft: '5%', marginTop: '0' }}>
          {message}
        </Alert>
        <hr style={{ width: '90%', marginLeft: '5%' }} />
        <form>
          <p className="input-title">Nom D&apos;utilisateur</p>
          <input type="text" name="username" id="username" placeholder="Nom d'utilisateur" required />
          <p className="input-title">Mot de passe</p>
          <div className="password-wrapper">
            <input type="password" name="password" id="password" placeholder="Mot de passe" required />
            <div className="eye-wrapper" onClick={toggleShowPassword} aria-hidden="true">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="hide-password"
                style={{
                  display: 'none', color: 'white', marginLeft: '25%', marginTop: '25%',
                }}
              />
              <FontAwesomeIcon className="show-password" icon={faEye} style={{ color: 'white', marginLeft: '25%', marginTop: '25%' }} />
            </div>
          </div>
          <button type="submit" className="submit-btn" onClick={login}> Login </button>
        </form>
        <Typography
          variant="subtitle2"
          onClick={howCreateAccount}
          style={
            {
              margin: '2.5% 0 0 5%', color: 'rgb(117, 191, 195)', fontWeight: '550', cursor: 'pointer',
            }
          }
        >
          Vous n&apos;avez pas de compte?
        </Typography>
      </div>
    </div>
  );
};

export default Login;
