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
    toggleAll,
    showTasks,
    showTvShows,
    showSites,
    showNotes,
    showCrypto,
    showAll,
  } = navigationContext;

  return (
    <SubMenus>
      <Option text="Toggle Notes" name="notes" onToggle={toggleNotes} isShow={showNotes} />
      <Option text="Toggle Crypto" name="crypto" onToggle={toggleCrypto} isShow={showCrypto} />
      <Option text="Toggle Daily Tasks" name="tasks" onToggle={toggleTasks} isShow={showTasks} />
      <Option text="Toggle Series" name="series" onToggle={toggleTvShows} isShow={showTvShows} />
      <Option text="Toggle Liked Sites" name="sites" onToggle={toggleSites} isShow={showSites} />
      <Option text="Toggle/Untoggle ALL" name="all" onToggle={toggleAll} isShow={showAll} />
    </SubMenus>
  );
};

export default Options;
