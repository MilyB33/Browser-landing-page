import React from 'react';
import PropTypes from 'prop-types';

const NavigationQuarter = ({ additionalClass, icon }) => {
  return <div className={`navigation__quarter navigation__quarter${additionalClass}`}>{icon}</div>;
};

NavigationQuarter.propTypes = {
  additionalClass: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};
export default NavigationQuarter;
