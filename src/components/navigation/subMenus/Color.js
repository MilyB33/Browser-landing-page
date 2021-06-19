import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Color = ({ text, name, onToggle, defaultColor, id }) => {
  const [color, setColor] = useState(defaultColor);

  const onInputChange = (event) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    setColor(defaultColor);
  }, [defaultColor]);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      console.log('yup');
      onToggle(color, name, id);
    });

    return () => {
      clearTimeout(timeoutID);
    };
  }, [color]);

  return (
    <div className="option__group color__box">
      <label htmlFor={name} className="color__title">
        {text}
      </label>
      <input
        type="color"
        name={name}
        id={id}
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
  id: PropTypes.string,
};

export default Color;
