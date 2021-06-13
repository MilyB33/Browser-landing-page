import React, { useContext } from 'react';
import Slider from 'react-slick';
import NavigationContext from '../../context/navigation/navigationContext';
const LikedSites = () => {
  const navigationContext = useContext(NavigationContext);
  const { bookmarks } = navigationContext;

  const settings = {
    speed: 500,
    slidesToShow: bookmarks.length < 4 ? bookmarks.length : 4,
    autoplay: true,
  };

  const renderedBookmarks = bookmarks.map(({ id, url, icon, name }) => {
    return (
      <a key={id} href={url} className="sites__item" title={name}>
        <img src={icon} alt="site icon" className="sites__icon" />
        <p>{name}</p>
      </a>
    );
  });

  return (
    <section className="container--widget sites">
      <h1>Liked Sites</h1>
      <Slider {...settings} className="sites__slider">
        {renderedBookmarks}
      </Slider>
    </section>
  );
};

export default LikedSites;
