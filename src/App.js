import React, { useState } from 'react';
import './styles/css/page/main.css';
import Search from './components/search/Search';
import LikedSites from './components/likedSites/LikedSites';
import Navigation from './components/navigation/Navigation';
import DailyTasks from './components/tasks/DailyTasks';
import MovieSeries from './components/movies/MoviesSeries';
import Notes from './components/notes/Notes';
import Crypto from './components/crypto/Crypto';
import TimeWeather from './components/time/TimeWeather';
import SeriesState from './context/Series/SeriesState';

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <SeriesState>
      <div className="container__main">
        <Search onToggle={toggleNav} />
        <LikedSites />
        <DailyTasks />
        <MovieSeries />
        <Notes />
        <Crypto />
        <TimeWeather />
        {showNav && <Navigation onToggle={toggleNav} />}
      </div>
    </SeriesState>
  );
}

export default App;
