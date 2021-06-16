import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ children, additionalClass, onToggle }) => {
  return (
    <button
      name="navigation-btn"
      onClick={onToggle}
      className={`navigation__quarter navigation__quarter${additionalClass}`}
    >
      {children}
    </button>
  );
};

NavigationQuarter.propTypes = {
  additionalClass: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
};
export default NavigationQuarter;
