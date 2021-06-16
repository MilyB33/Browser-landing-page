import React, { useContext, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TiArrowBack as GoBackIcon, IoIosCloseCircleOutline as CloseIcon } from 'react-icons/all';

import NavigationContext from '../../../context/navigation/navigationContext';

const SubMenus = ({ onSubmit, children }) => {
  const navigationContext = useContext(NavigationContext);
  const ref = useRef(null);

  const { toggleDefault, toggleNav } = navigationContext;

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 2 });
    // eslint-disable-next-line
  }, []);

  return (
    <section className="container__subMenu" ref={ref}>
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
