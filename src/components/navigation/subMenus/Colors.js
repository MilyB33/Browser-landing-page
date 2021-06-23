import React, { useContext } from 'react';
import SubMenus from './SubMenus';
import Color from './Color';

import NavigationContext from '../../../context/navigation/navigationContext';

const Colors = () => {
  const navigationContext = useContext(NavigationContext);

  const { colors, toggleColor, setDefaultColors } = navigationContext;

  const onDefault = (event) => {
    event.preventDefault();
    toggleColor();
    setDefaultColors();
  };

  return (
    <SubMenus>
      <h1>Colors :</h1>
      <Color
        text="Change Main Text Color"
        type="color"
        name="fontColor"
        onToggle={toggleColor}
        defaultColor={colors.fontColor}
      />
      <Color
        text="Change first background Color"
        type="color"
        name="bgColor"
        id="firstBgColor"
        onToggle={toggleColor}
        defaultColor={colors.firstBgColor}
      />
      <Color
        text="Change second background Color"
        type="color"
        name="bgColor"
        id="secondBgColor"
        onToggle={toggleColor}
        defaultColor={colors.secondBgColor}
      />
      <Color
        text="Change third background Color"
        type="color"
        name="bgColor"
        id="thirdBgColor"
        onToggle={toggleColor}
        defaultColor={colors.thirdBgColor}
      />

      <button
        className="colors__default btn--default"
        onClick={onDefault}
        title="Set Colors to Default"
        name="defaultColors"
      >
        Back to default
      </button>
      {/* <Color text="Change Menu Qarter Color" type="color" name="quarter-color"></Color> */}
    </SubMenus>
  );
};

export default Colors;
