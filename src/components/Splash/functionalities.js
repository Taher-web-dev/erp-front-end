import React from 'react';
import PropTypes from 'prop-types';
import Functionnality from './functionnality';

const Functionnalities = (props) => {
  const { fcts } = props;
  return (
    <div
      className="fcts-wrapper"
      style={{
        display: 'none', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gridColumnGap: '4%', marginLeft: '4%', marginRight: '4%',
      }}
    >
      {fcts.map((fct) => (
        <Functionnality
          title={fct.title}
          functions={fct.functions}
          color={fct.color}
          key={fcts.indexOf(fct)}
        />
      ))}
    </div>
  );
};
Functionnalities.propTypes = {
  fcts: PropTypes.instanceOf(Array).isRequired,
};
export default Functionnalities;
