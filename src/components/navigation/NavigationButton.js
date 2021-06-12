import React, { useContext } from 'react';
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/all';

import NavigationContext from '../../context/navigation/navigationContext';

const NavigationButton = () => {
  const navigationContext = useContext(NavigationContext);
  const { toggleNav } = navigationContext;

  return (
    <button className="btn__navigation btn--icon" onClick={toggleNav}>
      <HamburgerIcon />
    </button>
  );
};

export default NavigationButton;
