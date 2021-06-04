import React from 'react';
import SubMenus from './SubMenus';
import Option from './Option';

const Colors = ({ onToggleOptions }) => {
  return (
    <SubMenus onToggleOptions={onToggleOptions}>
      <Option text="Change Text Color" type="color" name="text-color"></Option>
      <Option text="Change Borders Color" type="color" name="border-color"></Option>
      <Option text="Change Menu Qarter Color" type="color" name="quarter-color"></Option>
    </SubMenus>
  );
};

export default Colors;
