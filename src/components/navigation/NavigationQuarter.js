import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ children, additionalClass, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`navigation__quarter navigation__quarter${additionalClass}`}
    >
      {children}
    </button>
  );
};

NavigationQuarter.propTypes = {
  additionalClass: PropTypes.string.isRequired,
};
export default NavigationQuarter;
