import React, { useContext } from 'react';
import { GrFormNext as NextIcon, GrFormPrevious as PreviousIcon } from 'react-icons/all';
import NavigationContext from '../../context/navigation/navigationContext';
const LikedSites = () => {
  const navigationContext = useContext(NavigationContext);
  const { bookmarks } = navigationContext;

  return (
    <div className="sites">
      <h1>Liked Sites</h1>
      <div className="sites__container">
        <PreviousIcon className="sites__controls" />

        <div className="sites__slider">
          {bookmarks.map(({ id, url, icon, name }) => {
            return (
              <a key={id} href={url} className="sites__item" title={name}>
                <img src={icon} alt="site icon" className="sites__icon" />
              </a>
            );
          })}
        </div>
        <NextIcon className="sites__controls" />
      </div>
    </div>
  );
};

export default LikedSites;
