import React, { useState } from 'react';
import {
  FaCog as CogIcon,
  BsBookmarks as BookmarkIcon,
  AiOutlinePlusCircle as PlusIcon,
  BiPalette as PaletteIcon,
} from 'react-icons/all';
import NavigationQuarter from './NavigationQuarter';
import Options from './subMenus/Options';
import Colors from './subMenus/Colors';
import logo from '../../static/images/gas-mask.png';

const Navigation = ({ onToggle }) => {
  const [showOption, setShowOption] = useState({
    showDefault: true,
    showOptions: false,
    showColors: false,
  });

  const { showDefault, showOptions, showColors } = showOption;

  const toggleOptions = (option) => {
    console.log(option);
    const newShowOption = {};
    for (const x in showOption) {
      if (x === option) newShowOption[x] = true;
      else newShowOption[x] = false;
    }

    setShowOption(newShowOption);
  };
  return (
    <nav className="navigation">
      <NavigationQuarter
        additionalClass="--top__left"
        icon={<CogIcon className="navigation__icon navigation__icon--cog" />}
        onToggleOptions={toggleOptions}
        optionType="showOptions"
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
        onToggleOptions={toggleOptions}
        optionType="showColors"
      />
      <div className="navigation__cutout">
        {showDefault && (
          <img
            src={logo}
            alt="gas mask image"
            className="navigation__logo"
            onClick={onToggle}
            title="Click to close Menu"
          />
        )}

        {showOptions && <Options onToggleOptions={toggleOptions}></Options>}
        {showColors && <Colors onToggleOptions={toggleOptions}></Colors>}
      </div>
    </nav>
  );
};

export default Navigation;
