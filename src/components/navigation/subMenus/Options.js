import React, { useContext } from 'react';
import SubMenus from './SubMenus';
import Option from './Option';

import NavigationContext from '../../../context/navigation/navigationContext';

const Options = () => {
  const navigationContext = useContext(NavigationContext);
  const {
    toggleTasks,
    toggleTvShows,
    toggleNotes,
    toggleSites,
    toggleCrypto,
    showTasks,
    showTvShows,
    showSites,
    showNotes,
    showCrypto,
  } = navigationContext;
  return (
    <SubMenus>
      <Option
        text="Toggle Notes"
        type="checkbox"
        name="notes"
        onToggle={toggleNotes}
        isShow={showNotes}
      />
      <Option
        text="Toggle Crypto"
        type="checkbox"
        name="crypto"
        onToggle={toggleCrypto}
        isShow={showCrypto}
      />
      <Option
        text="Toggle Daily Tasks"
        type="checkbox"
        name="tasks"
        onToggle={toggleTasks}
        isShow={showTasks}
      />
      <Option
        text="Toggle Series"
        type="checkbox"
        name="series"
        onToggle={toggleTvShows}
        isShow={showTvShows}
      />
      <Option
        text="Toggle Liked Sites"
        type="checkbox"
        name="sites"
        onToggle={toggleSites}
        isShow={showSites}
      />
    </SubMenus>
  );
};

export default Options;
