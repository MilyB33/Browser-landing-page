import React from 'react';
import {
  AiFillCloseCircle as CloseIcon,
  FaCog as CogIcon,
  BsBookmarks as BookmarkIcon,
  AiOutlinePlusCircle as PlusIcon,
  BiPalette as PaletteIcon,
} from 'react-icons/all';
import NavigationQuarter from './NavigationQuarter';

const Navigation = ({ onToggle }) => {
  return (
    <nav className="navigation">
      <NavigationQuarter
        additionalClass="--top__left"
        icon={<CogIcon className="navigation__icon navigation__icon--cog" />}
      />
      <NavigationQuarter
        additionalClass="--top__right"
        icon={<BookmarkIcon className="navigation__icon navigation__icon--bookmark" />}
      />
      <NavigationQuarter
        additionalClass="--bottom__right"
        icon={<PlusIcon className="navigation__icon navigation__icon--plus" />}
      />
      <NavigationQuarter
        additionalClass="--bottom__left"
        icon={<PaletteIcon className="navigation__icon navigation__icon--palette" />}
      />
      <div className="navigation__cutout">
        <CloseIcon style={{ cursor: 'pointer' }} onClick={onToggle} />
      </div>
    </nav>
  );
};

export default Navigation;
