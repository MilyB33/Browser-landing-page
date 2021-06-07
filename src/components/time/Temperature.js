import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Temperature = ({ temperature }) => {
  return (
    <Fragment>
      {temperature}
      <sup>o</sup>
    </Fragment>
  );
};

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired,
};

export default Temperature;
