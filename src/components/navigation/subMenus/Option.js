import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ text, type, name }) => {
  return (
    <div className="option__group">
      <label htmlFor={name}>{text}</label>
      <input type={type} name={name} id={name} className="option__input" />
    </div>
  );
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Option;
