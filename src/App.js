import React, { useState } from 'react';
import './styles/css/page/main.css';
import Search from './components/search/Search';
import LikedSites from './components/likedSites/LikedSites';
import Navigation from './components/navigation/Navigation';
import DailyTasks from './components/tasks/DailyTasks';
import MovieSeries from './components/movies/MoviesSeries';
import Notes from './components/notes/Notes';
import Crypto from './components/crypto/Crypto';
function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container__main">
      <Search onToggle={toggleNav} />
      <LikedSites />
      <DailyTasks />
      <MovieSeries />
      <Notes />
      <Crypto />

      {showNav && <Navigation onToggle={toggleNav} />}
    </div>
  );
}

export default App;
