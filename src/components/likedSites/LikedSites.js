import React from 'react';
import { GrFormNext as NextIcon, GrFormPrevious as PreviousIcon } from 'react-icons/all';

const LikedSites = () => {
  return (
    <div className="sites">
      <h1>Liked Sites</h1>
      <div className="sites__container">
        <PreviousIcon className="sites__controls" />
        <div className="sites__slider">
          <div className="sites__item"></div>
          <div className="sites__item"></div>
          <div className="sites__item"></div>
          <div className="sites__item"></div>
          <div className="sites__item"></div>
        </div>
        <NextIcon className="sites__controls" />
      </div>
    </div>
  );
};

export default LikedSites;
