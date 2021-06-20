import React, { useContext, useEffect, Fragment } from 'react';
import TvShowsForm from './TvShowsForm';
import TvShowsList from './TvShowsList';
import SearchResults from './SearchResults';

import SeriesContext from '../../context/Series/seriesContext';

const TvShows = () => {
  const seriesContext = useContext(SeriesContext);
  const {
    addSeries,
    series,
    searchResults,
    getSeries,
    removeSeries,
    searchSeries,
    updateSeries,
    clearSearch,
    error,
  } = seriesContext;

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (series.length === 0) return;
    updateSeries();
    // eslint-disable-next-line
  }, [series]);

  return (
    <section className="premieres container--widget container--widget__background">
      <h1>Tv Shows Premieres</h1>
      <TvShowsForm onSearch={searchSeries} />
      {error || (
        <Fragment>
          {searchResults.length === 0 ? (
            <TvShowsList
              series={series}
              removeSeries={removeSeries}
            />
          ) : (
            <SearchResults
              searchResults={searchResults}
              addSeries={addSeries}
              clearSearch={clearSearch}
            />
          )}
        </Fragment>
      )}
    </section>
  );
};

export default TvShows;
