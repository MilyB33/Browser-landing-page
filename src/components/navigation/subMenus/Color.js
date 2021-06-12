import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Color = ({ text, name, onToggle, defaultColor }) => {
  const [color, setColor] = useState(defaultColor);
  const onInputChange = (event) => {
    setColor(event.target.value);
    onToggle(color, event.target.name);
  };
  return (
    <div className="option__group">
      <label htmlFor={name}>{text}</label>
      <input
        type="color"
        name={name}
        id={name}
        value={color}
        onChange={onInputChange}
        className="option__input"
      />
    </div>
  );
};

Color.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired,
  defaultColor: PropTypes.string.isRequired,
};

export default Color;
