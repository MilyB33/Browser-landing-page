import React, { useContext, useEffect } from 'react';
import SubMenus from './SubMenus';
import Color from './Color';

import NavigationContext from '../../../context/navigation/navigationContext';

const Colors = () => {
  const navigationContext = useContext(NavigationContext);

  const { colors, toggleTextColor } = navigationContext;
  useEffect(() => {
    console.log(colors);
  });
  return (
    <SubMenus>
      <Color
        text="Change Text Color"
        type="color"
        name="textColor"
        onToggle={toggleTextColor}
        defaultColor={colors.textColor}
      ></Color>
      {/* <Color text="Change Borders Color" type="color" name="border-color"></Color>
      <Color text="Change Menu Qarter Color" type="color" name="quarter-color"></Color> */}
    </SubMenus>
  );
};

export default Colors;
