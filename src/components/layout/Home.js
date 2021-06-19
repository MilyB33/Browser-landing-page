import React, { useContext, useEffect } from 'react';
import Search from '../search/Search';
import LikedSites from '../likedSites/LikedSites';
import Navigation from '../navigation/Navigation';
import DailyTasks from '../tasks/DailyTasks';
import TvShows from '../movies/TvShows';
import Notes from '../notes/Notes';
import Crypto from '../crypto/Crypto';
import TimeWeather from '../time/TimeWeather';
import storage from '../../context/storage/index';

import NavigationContext from '../../context/navigation/navigationContext';

const Home = () => {
  const navigationContext = useContext(NavigationContext);

  const {
    showNav,
    getColors,
    getWidgets,
    widgetsDisplays: {
      showTasks,
      showTvShows,
      showNotes,
      showSites,
      showCrypto,
    },
    colors,
  } = navigationContext;

  useEffect(() => {
    storage();
    getWidgets();
    getColors();
    //eslint-disable-next-line
  }, []);

  // Must be here because if colors are loaded it will updates bg
  useEffect(() => {
    document.body.style.color = colors.fontColor;
    document.body.style.background = `linear-gradient(45deg, ${colors.firstBgColor}, ${colors.secondBgColor}, ${colors.thirdBgColor})`;
    // eslint-disable-next-line
  }, [colors]);

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
