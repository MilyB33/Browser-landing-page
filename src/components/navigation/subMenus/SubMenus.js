import React, { useContext } from 'react';
import { TiArrowBack as GoBackIcon, IoIosCloseCircleOutline as CloseIcon } from 'react-icons/all';

import NavigationContext from '../../../context/navigation/navigationContext';

const SubMenus = ({ onSubmit, children }) => {
  const navigationContext = useContext(NavigationContext);

  const { toggleDefault, toggleNav } = navigationContext;

  return (
    <section className="container__subMenu">
      <div className="subMenu__controls">
        <button
          className="subMenu__control__btn btn--icon"
          title="Go Back"
          onClick={toggleDefault}
          name="back-btn"
        >
          <GoBackIcon />
        </button>
        <button
          className="subMenu__control__btn btn--icon"
          title="Close Menu"
          onClick={toggleNav}
          name="close-menu"
        >
          <CloseIcon />
        </button>
      </div>
      <form className="options__form" onSubmit={onSubmit}>
        {children}
      </form>
    </section>
  );
};

export default SubMenus;
