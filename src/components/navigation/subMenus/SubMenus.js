import React, { useContext } from 'react';
import OptionsContainer from './OptionsContainer';
import { TiArrowBack as GoBackIcon, IoIosCloseCircleOutline as CloseIcon } from 'react-icons/all';

import NavigationContext from '../../../context/navigation/navigationContext';

const SubMenus = ({ children }) => {
  const navigationContext = useContext(NavigationContext);

  const { toggleDefault, toggleNav } = navigationContext;

  return (
    <div className="subMenus">
      <div className="subMenus__controls">
        <button className="subMenus__control__btn" title="Go Back" onClick={toggleDefault}>
          <GoBackIcon className="subMenus__icon" />
        </button>
        <button className="subMenus__control__btn" title="Close Menu" onClick={toggleNav}>
          <CloseIcon className="subMenus__icon" />
        </button>
      </div>
      <OptionsContainer>{children}</OptionsContainer>
    </div>
  );
};

export default SubMenus;
