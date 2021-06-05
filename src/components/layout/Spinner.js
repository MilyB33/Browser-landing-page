import React, { Fragment } from 'react';
import SpinnerLoad from '../../static/images/spinner.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img src={SpinnerLoad} alt="spinner" className="spinner" />
    </Fragment>
  );
};

export default Spinner;
