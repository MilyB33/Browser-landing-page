import React, { useContext, useEffect } from 'react';
import Premiere from './Premiere';
import SeriesContext from '../../context/Series/seriesContext';

const Premieres = () => {
  const seriesContext = useContext(SeriesContext);
  const { series, getSeries } = seriesContext;
  useEffect(() => {
    getSeries();
    console.log(series);
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
