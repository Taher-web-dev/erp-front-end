import React from 'react';
import PropTypes from 'prop-types';
import './functionnality.css';

const Functionnality = (props) => {
  const { title, functions, color } = props;
  return (
    <div className="functionnality-wrapper">
      <h2 style={{ color: `${color}`, borderBottom: `1px solid ${color}`, textTransform: 'uppercase' }}>
        {title}
      </h2>
      <div>
        {functions.map((fct) => (
          <p className="function" key={functions.indexOf(fct)}>
            {fct}
          </p>
        ))}
      </div>
    </div>
  );
};
Functionnality.propTypes = {
  title: PropTypes.instanceOf(String).isRequired,
  functions: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.instanceOf(String).isRequired,
};
export default Functionnality;
