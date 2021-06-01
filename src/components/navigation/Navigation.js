import React from 'react';
import {
  FaCog as CogIcon,
  BsBookmarks as BookmarkIcon,
  AiOutlinePlusCircle as PlusIcon,
  BiPalette as PaletteIcon,
} from 'react-icons/all';
import NavigationQuarter from './NavigationQuarter';
import logo from '../../static/images/gas-mask.png';

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
        <img
          src={logo}
          alt="gas mask image"
          className="navigation__logo"
          onClick={onToggle}
          title="Click to close Menu"
        />
      </div>
    </nav>
  );
};

export default Navigation;
