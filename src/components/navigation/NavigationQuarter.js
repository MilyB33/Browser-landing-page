import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ additionalClass, icon }) => {
  return (
    <button className={`navigation__quarter navigation__quarter${additionalClass}`}>{icon}</button>
  );
};

NavigationQuarter.propTypes = {
  additionalClass: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default NavigationQuarter;
