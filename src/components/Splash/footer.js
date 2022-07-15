import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LOGO from '../../assets/images/logo.jpg';
import appDescription from './footerHelper';
import './footer.css';

const Footer = () => {
  const [lang, setLang] = useState('Français');
  const SelectLanguage = () => {
    const element = document.querySelector('.select-wrapper');
    setLang(element.value);
  };
  const p = document.querySelector('.app-desc');
  if (p) {
    p.innerHTML = appDescription[lang];
  }
  useEffect(() => {
    const p = document.querySelector('.app-desc');
    if (p) {
      p.innerHTML = appDescription[lang];
    }
  }, []);
  return (
    <div className="footer-wrapper">
      <div className="product-inf">
        <img src={LOGO} alt="logo" className="logo-img" />
        <select name="languages" id="languages" onChange={SelectLanguage} className="select-wrapper">
          <option name="french" className="Option">
            Français
          </option>
          <option className="Option">
            العربية
          </option>
          <option className="Option">
            English
          </option>
        </select>
        <hr />
        <p className="app-desc" />
        <div className="links">
          <a href="https://www.facebook.com/taherhagui" className="link">
            <FontAwesomeIcon icon={faFacebookF} style={{ color: 'rgb(174, 171, 167)' }} />
          </a>
          <a href="https://www.linkedin.com/in/taher-haggui/" className="link">
            <FontAwesomeIcon icon={faLinkedinIn} style={{ color: 'rgb(174, 171, 167)' }} />
          </a>
          <a href="https://github.com/Taher-web-dev" className="link">
            <FontAwesomeIcon icon={faGithub} style={{ color: 'rgb(174, 171, 167)' }} />
          </a>
          <a href="mailto:ttaherhagui@gmail.com" className="link">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: 'rgb(174, 171, 167)' }} />
          </a>
        </div>
      </div>
      <div className="developer-inf">
        <p className="prog-editor">
          Program made by
          <p className="dev-name">&nbsp;Taher Haggui</p>
        </p>
      </div>
    </div>
  );
};
export default Footer;
