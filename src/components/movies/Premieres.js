import React, { useContext, useEffect } from 'react';
import Premiere from './Premiere';
import SeriesContext from '../../context/Series/seriesContext';

const Premieres = () => {
  const seriesContext = useContext(SeriesContext);
  const { series, getSeries } = seriesContext;

  useEffect(() => {
    getSeries();
    // eslint-disable-next-line
  }, []);

  return (
    <ul className="container">
      {series.map((TvShow) => (
        <Premiere key={TvShow.id} TvShow={TvShow} />
      ))}
    </ul>
  );
};

export default Premieres;
