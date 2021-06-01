import React, { useState } from 'react';
import './styles/css/page/main.css';
import Search from './components/search/Search';
import LikedSites from './components/likedSites/LikedSites';
import Navigation from './components/navigation/Navigation';

function App() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="container__main">
      <Search onToggle={toggleNav} />
      <LikedSites />
      {showNav && <Navigation onToggle={toggleNav} />}
    </div>
  );
}

export default App;
