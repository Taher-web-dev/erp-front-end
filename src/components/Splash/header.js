import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ClearIcon from '@mui/icons-material/Clear';
import LOGO from '../../assets/images/logo.jpg';
import './header.css';

const Header = () => {
  const navigate = useNavigate();
  const LoginHandler = () => {
    navigate('/login');
  };
  const toggleApp = () => {
    const clear = document.querySelector('.cancel-icon');
    const expand = document.querySelector('.break-down-icon');
    const appText = document.querySelector('.applications');
    const header = document.querySelector('.splash-header');
    const presentation = document.querySelector('.over-all-presentation');
    const seperator = document.querySelector('.empty-seperator');
    const packages = document.querySelectorAll('.package-wrapper');
    const footer = document.querySelector('.footer-wrapper');
    const fcts = document.querySelector('.fcts-wrapper');

    if (clear.style.display !== 'none') {
      clear.style.display = 'none';
      expand.style.display = 'block';
      appText.style.color = 'black';
      header.style.border = 'none';
      presentation.style.display = 'grid';
      seperator.style.display = 'block';
      Array.from(packages).forEach((pack) => {
        const elem = pack;
        elem.style.display = 'block';
      });
      footer.style.display = 'block';
      fcts.style.display = 'none';
    } else {
      clear.style.display = 'block';
      expand.style.display = 'none';
      appText.style.color = 'rgb(24, 126, 132)';
      header.style.borderBottom = '1px solid rgb(233, 236, 239)';
      presentation.style.display = 'none';
      seperator.style.display = 'none';
      Array.from(packages).forEach((pack) => {
        const elem = pack;
        elem.style.display = 'none';
      });
      footer.style.display = 'none';
      fcts.style.display = 'grid';
    }
  };
  return (
    <header className="splash-header">
      <img src={LOGO} alt="Logo Program Editor" className="logo-editor" />
      <div className="applications" onClick={toggleApp} aria-hidden="true">
        <Typography variant="button" style={{ fontSize: '14px', fontWeight: '700' }}>
          Applications
        </Typography>
        <ExpandMoreIcon className="break-down-icon" />
        <ClearIcon style={{ display: 'none', color: 'rgb(24, 126, 132)', width: '0.75em' }} className="cancel-icon" />
      </div>
      <Typography variant="h6" className="login" style={{ marginRight: '5%', cursor: 'pointer' }} onClick={LoginHandler}>
        Se connecter
      </Typography>
    </header>
  );
};
export default Header;
