import React from 'react';
import OptionsContainer from './OptionsContainer';
import { TiArrowBack as GoBackIcon, IoIosCloseCircleOutline as CloseIcon } from 'react-icons/all';
const SubMenus = ({ children, onToggleOptions }) => {
  return (
    <div className="subMenus">
      <div className="subMenus__controls">
        <button
          className="subMenus__control__btn"
          title="Go Back"
          onClick={() => onToggleOptions('showDefault')}
        >
          <GoBackIcon className="subMenus__icon" />
        </button>
        <button className="subMenus__control__btn" title="Close Menu">
          <CloseIcon className="subMenus__icon" />
        </button>
      </div>
      <OptionsContainer>{children}</OptionsContainer>
    </div>
  );
};

export default SubMenus;
