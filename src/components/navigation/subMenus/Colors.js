import React, { useContext } from 'react';
import SubMenus from './SubMenus';
import Color from './Color';

import NavigationContext from '../../../context/navigation/navigationContext';

const Colors = () => {
  const navigationContext = useContext(NavigationContext);

  const { colors, toggleColor } = navigationContext;

  return (
    <SubMenus>
      <Color
        text="Change Text Color"
        type="color"
        name="fontColor"
        onToggle={toggleColor}
        defaultColor={colors.fontColor}
      />
      <Color
        text="Change first background Color"
        type="color"
        name="firstBgColor"
        onToggle={toggleColor}
        defaultColor={colors.firstBgColor}
      />
      {/* <Color text="Change Menu Qarter Color" type="color" name="quarter-color"></Color> */}
    </SubMenus>
  );
};

export default Colors;
