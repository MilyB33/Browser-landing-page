import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import NavigationContext from '../../context/navigation/navigationContext';
const LikedSites = () => {
  const navigationContext = useContext(NavigationContext);
  const { bookmarks, getBookmarks } = navigationContext;

  useEffect(() => {
    getBookmarks();
    // eslint-disable-next-line
  }, []);

  const settings = {
    speed: 500,
    slidesToShow: bookmarks.length < 4 ? bookmarks.length : 4,
    autoplay: true,
    variableWidth: false,
  };

  // This is for the sites which not provided easy path to favicon
  const onError = (event) => {
    event.target.onError = null;
    event.target.src =
      'https://pensive-payne-d85f31.netlify.app/favicon.ico';
  };

  const renderedBookmarks = bookmarks.map(
    ({ id, url, icon, name }) => {
      return (
        <a key={id} href={url} className="sites__item" title={name}>
          <img
            src={icon}
            alt="site icon"
            className="sites__icon"
            onError={onError}
          />
          <p>{name}</p>
        </a>
      );
    }
  );

  return (
    <section className="container--widget container--widget__background sites">
      <h1>Liked Sites</h1>
      <Slider {...settings} className="sites__slider">
        {renderedBookmarks}
      </Slider>
    </section>
  );
};

export default LikedSites;
