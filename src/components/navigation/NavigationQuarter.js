import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ children, additionalClass, icon, onToggle }) => {
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
  icon: PropTypes.element.isRequired,
};
export default NavigationQuarter;
