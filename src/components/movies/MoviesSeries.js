import React from 'react';
import PremieresForm from './PremieresForm';
import Premieres from './Premieres';

const MovieSeries = () => {
  return (
    <section className="premieres container--functionality">
      <h1>Movie/Series Premiere</h1>
      <PremieresForm />
      <Premieres />
      <div className="container"></div>
    </section>
  );
};

export default MovieSeries;
