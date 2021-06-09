import React from 'react';
import PropTypes from 'prop-types';

import TvShow from './TvShow';

const TvShowsList = ({ series, removeSeries }) => {
  return (
    <ul className="container">
      {series.map((tvShow) => (
        <TvShow key={tvShow.id} tvShow={tvShow} removeSeries={removeSeries} />
      ))}
    </ul>
  );
};

TvShowsList.propTypes = {
  series: PropTypes.array.isRequired,
  removeSeries: PropTypes.func.isRequired,
};

export default TvShowsList;
