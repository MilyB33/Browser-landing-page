import React, { useContext, useEffect, useState } from 'react';
import TvShowsForm from './TvShowsForm';
import TvShowsList from './TvShowsList';
import SearchResults from './SearchResults';

import SeriesContext from '../../context/Series/seriesContext';

const TvShows = () => {
  const seriesContext = useContext(SeriesContext);
  const { addSeries, series, getSeries, removeSeries } = seriesContext;

  const [tvShowsList, setTvShowsList] = useState([]);

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line
  }, []);

  const onSearch = async (event, text, callback) => {
    event.preventDefault();
    if (text === '') return;
    const search = await fetch(`https://www.episodate.com/api/search?q=${text}&page=1`, {
      method: 'GET',
    });

    const data = await search.json();
    setTvShowsList(data.tv_shows);
    callback('');
  };

  const onSubmit = (event, id) => {
    event.preventDefault();
    if (id) addSeries(id);
    setTvShowsList([]);
  };

  return (
    <section className="premieres container--functionality">
      <h1>Tv Shows Premieres</h1>
      <TvShowsForm onSearch={onSearch} />

      {tvShowsList.length === 0 ? (
        <TvShowsList series={series} removeSeries={removeSeries} />
      ) : (
        <SearchResults tvShowsList={tvShowsList} onSubmit={onSubmit} />
      )}

      <div className="container"></div>
    </section>
  );
};

export default TvShows;
