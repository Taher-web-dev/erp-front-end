import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Service from './service';
import './package.css';

const Package = (props) => {
  const { nbr, name, services } = props;
  const colors = ['rgb(248, 249, 250)', 'rgb(233, 236, 239)'];
  return (
    <div className="package-wrapper" style={{ backgroundColor: nbr % 2 === 0 ? colors[0] : colors[1] }}>
      <Typography variant="h2" style={{ textTransform: 'capitalize', marginLeft: '5%' }}>
        {name}
      </Typography>
      <div className="services-wraper">
        {services.map((service) => (
          <Service
            name={service.name}
            path={service.path}
            key={services.indexOf(service)}
          />
        ))}
      </div>
    </div>
  );
};
Package.propTypes = {
  nbr: PropTypes.instanceOf(Number).isRequired,
  name: PropTypes.instanceOf(String).isRequired,
  services: PropTypes.instanceOf(Array).isRequired,
};
export default Package;
