import React, { useContext } from 'react';
import {
  FaCog as CogIcon,
  BsBookmarks as BookmarkIcon,
  AiOutlinePlusCircle as PlusIcon,
  BiPalette as PaletteIcon,
} from 'react-icons/all';

import NavigationQuarter from './NavigationQuarter';
import Options from './subMenus/Options';
import Colors from './subMenus/Colors';
import Bookmarks from './subMenus/Bookmarks';
import Add from './subMenus/Add';

import logo from '../../static/images/gas-mask.png';

import NavigationContext from '../../context/navigation/navigationContext';

const Navigation = () => {
  const navigationContext = useContext(NavigationContext);

  const { toggleNav, toggleOptions, toggleColors, toggleBookmarks, toggleAdd, navDisplays } =
    navigationContext;

  const { showDefault, showOptions, showColors, showBookmarks, showAdd } = navDisplays;

  return (
    <nav className="navigation">
      <NavigationQuarter additionalClass="--top__left" onToggle={toggleOptions}>
        <CogIcon className="navigation__icon navigation__icon--cog" />
      </NavigationQuarter>
      <NavigationQuarter additionalClass="--top__right" onToggle={toggleBookmarks}>
        <BookmarkIcon className="navigation__icon navigation__icon--bookmark" />
      </NavigationQuarter>
      <NavigationQuarter additionalClass="--bottom__right" onToggle={toggleAdd}>
        <PlusIcon className="navigation__icon navigation__icon--plus" />
      </NavigationQuarter>
      <NavigationQuarter additionalClass="--bottom__left" onToggle={toggleColors}>
        <PaletteIcon className="navigation__icon navigation__icon--palette" />
      </NavigationQuarter>

      <section className="navigation__cutout">
        {showDefault && (
          <img
            src={logo}
            alt="gas mask"
            className="navigation__logo"
            onClick={toggleNav}
            title="Click to close Menu"
          />
        )}

        {showOptions && <Options />}
        {showColors && <Colors />}
        {showBookmarks && <Bookmarks />}
        {showAdd && <Add />}
      </section>
    </nav>
  );
};

export default Navigation;
