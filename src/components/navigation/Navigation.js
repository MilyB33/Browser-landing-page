import React, { useContext, useRef, useEffect } from 'react';
import {
  FaCog as CogIcon,
  BsBookmarks as BookmarkIcon,
  AiFillInfoCircle as InfoIcon,
  BiPalette as PaletteIcon,
} from 'react-icons/all';

import { onOpenNav } from '../animations/Animations';

import NavigationQuarter from './NavigationQuarter';
import Options from './subMenus/Options';
import Colors from './subMenus/Colors';
import Bookmarks from './subMenus/Bookmarks';
import About from './subMenus/About';

import logo from '../../static/images/gas-mask.png';

import NavigationContext from '../../context/navigation/navigationContext';

const Navigation = () => {
  const navigationContext = useContext(NavigationContext);
  const ref = useRef(null);

  const {
    toggleNav,
    toggleOptions,
    toggleColors,
    toggleBookmarks,
    toggleAbout,
    navDisplays,
  } = navigationContext;

  const {
    showDefault,
    showOptions,
    showColors,
    showBookmarks,
    showAbout,
  } = navDisplays;

  useEffect(() => {
    onOpenNav(ref.current);
    // eslint-disable-next-line
  }, []);

  return (
    <nav className="navigation" ref={ref}>
      <NavigationQuarter
        additionalClass="--top__left"
        onToggle={toggleOptions}
      >
        <CogIcon className="navigation__icon navigation__icon--cog" />
      </NavigationQuarter>
      <NavigationQuarter
        additionalClass="--top__right"
        onToggle={toggleBookmarks}
      >
        <BookmarkIcon className="navigation__icon navigation__icon--bookmark" />
      </NavigationQuarter>
      <NavigationQuarter
        additionalClass="--bottom__right"
        onToggle={toggleAbout}
      >
        <InfoIcon className="navigation__icon navigation__icon--plus" />
      </NavigationQuarter>
      <NavigationQuarter
        additionalClass="--bottom__left"
        onToggle={toggleColors}
      >
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
        {showAbout && <About />}
      </section>
    </nav>
  );
};

export default Navigation;
