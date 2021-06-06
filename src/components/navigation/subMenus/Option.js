import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ text, type, name, onToggle, isShow }) => {
  return (
    <div className="option__group">
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onToggle}
        checked={isShow}
        className="option__input"
      />
    </div>
  );
};

Option.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  isShow: PropTypes.bool.isRequired,
};

export default Option;
