import React, { useContext } from 'react';
import Slider from 'react-slick';
import NavigationContext from '../../context/navigation/navigationContext';
const LikedSites = () => {
  const navigationContext = useContext(NavigationContext);
  const { bookmarks } = navigationContext;

  const settings = {
    speed: 500,
    slidesToShow: bookmarks.length < 5 ? bookmarks.length : 5,
    variableWidth: true,
    autoplay: true,
  };

  return (
    <div className="sites">
      <h1>Liked Sites</h1>
      <div className="sites__container">
        {/* <PreviousIcon className="sites__controls" /> */}

        <Slider {...settings} className="sites__slider">
          {bookmarks.map(({ id, url, icon, name }) => {
            return (
              <a style={{ width: '4rem' }} key={id} href={url} className="sites__item" title={name}>
                <img src={icon} alt="site icon" className="sites__icon" />
              </a>
            );
          })}
        </Slider>
        {/* <NextIcon className="sites__controls" /> */}
      </div>
    </div>
  );
};

export default LikedSites;
