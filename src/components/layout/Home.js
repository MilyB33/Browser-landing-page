import React, { useContext, useEffect } from 'react';
import Search from '../search/Search';
import LikedSites from '../likedSites/LikedSites';
import Navigation from '../navigation/Navigation';
import DailyTasks from '../tasks/DailyTasks';
import TvShows from '../movies/TvShows';
import Notes from '../notes/Notes';
import Crypto from '../crypto/Crypto';
import TimeWeather from '../time/TimeWeather';

import NavigationContext from '../../context/navigation/navigationContext';

const Home = () => {
  const navigationContext = useContext(NavigationContext);

  const {
    showNav,
    getWidgets,
    widgetsDisplays: { showTasks, showTvShows, showNotes, showSites, showCrypto },
  } = navigationContext;

  useEffect(() => {
    getWidgets();
    // eslint-disable-next-line
  }, []);

  return (
    <main className="container__grid">
      <Search />
      <TimeWeather />
      {showSites && <LikedSites />}
      {showTasks && <DailyTasks />}
      {showTvShows && <TvShows />}
      {showNotes && <Notes />}
      {showCrypto && <Crypto />}
      {showNav && <Navigation />}
    </main>
  );
};

export default Home;
