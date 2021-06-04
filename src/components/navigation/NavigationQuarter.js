import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ additionalClass, icon, onToggleOptions, optionType }) => {
  return (
    <button
      onClick={() => onToggleOptions(optionType)}
      className={`navigation__quarter navigation__quarter${additionalClass}`}
    >
      {icon}
    </button>
  );
};

NavigationQuarter.propTypes = {
  additionalClass: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default NavigationQuarter;
