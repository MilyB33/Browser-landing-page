import React from 'react';
import SubMenus from './SubMenus';

const Add = () => {
  return (
    <SubMenus>
      <div className="about">
        <h1>About :</h1>

        <p className="about__description">
          This is simple Browser landing page with additional widgets. It's offers adding Notes,
          Daily Tasks , favourite sites ,checking actual price of Cryptocurrency and displaying info
          about your favourite TV Shows.
        </p>

        <h2>Used Apis :</h2>

        <a href="https://www.coingecko.com/pl/api">
          <h3>Cryptocurrency: CoinGecko API</h3>
        </a>

        <a href="https://www.episodate.com/api">
          <h3>TV Shows: EpisoDate API</h3>
        </a>

        <a href="http://www.7timer.info/doc.php">
          <h3>Temperature: 7time API</h3>
        </a>

        <p>Created by Miłosz Bolewski</p>
      </div>
    </SubMenus>
  );
};

export default Add;
