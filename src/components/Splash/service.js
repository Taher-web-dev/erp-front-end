import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './service.css';

const Service = (props) => {
  const { path, name } = props;
  return (
    <div className="service-wrapper">
      <img src={path} alt="service-icon" className="service-icon" />
      <Typography
        variant="h5"
        style={{
          alignSelf: 'center',
          textTransform: 'capitalize',
          color: 'rgb(57, 99, 100)',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {name}
      </Typography>
    </div>
  );
};
Service.propTypes = {
  path: PropTypes.instanceOf(String).isRequired,
  name: PropTypes.instanceOf(String).isRequired,
};
export default Service;
