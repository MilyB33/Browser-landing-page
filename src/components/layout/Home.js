import React, { Fragment, useContext, useEffect } from 'react';
import Search from '../search/Search';
import LikedSites from '../likedSites/LikedSites';
import Navigation from '../navigation/Navigation';
import DailyTasks from '../tasks/DailyTasks';
import MovieSeries from '../movies/MoviesSeries';
import Notes from '../notes/Notes';
import Crypto from '../crypto/Crypto';
import TimeWeather from '../time/TimeWeather';

import NavigationContext from '../../context/navigation/navigationContext';

const Home = () => {
  const navigationContext = useContext(NavigationContext);

  const { showNav, showTasks, showTvShows, showNotes, showSites, showCrypto } = navigationContext;

  return (
    <Fragment>
      <div className="container__main">
        <Search />
        <TimeWeather />
        {showSites && <LikedSites />}
        {showTasks && <DailyTasks />}
        {showTvShows && <MovieSeries />}
        {showNotes && <Notes />}
        {showCrypto && <Crypto />}
        {showNav && <Navigation />}
      </div>
    </Fragment>
  );
};

export default Home;
