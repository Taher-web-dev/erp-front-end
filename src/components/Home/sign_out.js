import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './sign_out.css';

const SignOut = (props) => {
  const currentUser = useSelector((state) => state.currentUser);
  const { username } = currentUser;
  const { disp } = props;
  return (
    <div className="Sign-out-wrapper" style={{ display: disp ? 'block' : 'none' }}>
      <p className="user-title"> Connecté en tant que </p>
      <p className="user">{username}</p>
      <hr className="seperator" />
      <p className="sign-out">Se Déconnecter</p>
    </div>
  );
};
SignOut.propTypes = {
  disp: PropTypes.instanceOf(Boolean).isRequired,
};
export default SignOut;
