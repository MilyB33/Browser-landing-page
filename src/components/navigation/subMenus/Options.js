import React from 'react';
import SubMenus from './SubMenus';
import Option from './Option';
const Options = ({ onToggleOptions }) => {
  return (
    <SubMenus onToggleOptions={onToggleOptions}>
      <Option text="Toggle Notes" type="checkbox" name="notes"></Option>
      <Option text="Toggle Crypto" type="checkbox" name="crypto"></Option>
      <Option text="Toggle Daily Tasks" type="checkbox" name="tasks"></Option>
      <Option text="Toggle Series" type="checkbox" name="series"></Option>
      <Option text="Toggle Liked Sites" type="checkbox" name="sites"></Option>
    </SubMenus>
  );
};

export default Options;
