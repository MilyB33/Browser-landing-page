import React, { useContext } from 'react';
import { TiArrowBack as GoBackIcon, IoIosCloseCircleOutline as CloseIcon } from 'react-icons/all';

import NavigationContext from '../../../context/navigation/navigationContext';

const SubMenus = ({ onSubmit, children }) => {
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
      <form className="options__form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default SubMenus;
