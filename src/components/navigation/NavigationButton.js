import React from 'react';
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/all';
const NavigationButton = ({ onToggle }) => {
  return (
    <button className="btn__navigation" onClick={onToggle}>
      <HamburgerIcon />
    </button>
  );
};

export default NavigationButton;
