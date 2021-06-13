import React from 'react';
import PropTypes from 'prop-types';

import TvShow from './TvShow';

const TvShowsList = ({ series, removeSeries }) => {
  const renderedShows = series.map((tvShow) => (
    <TvShow key={tvShow.id} tvShow={tvShow} removeSeries={removeSeries} />
  ));

  return (
    <table className="list__results">
      <thead>
        <tr>
          <th>
            <h3>Name:</h3>
          </th>
          <th>
            <h3>Air Date:</h3>{' '}
          </th>
          <th>
            <h3>Remove:</h3>{' '}
          </th>
        </tr>
      </thead>
      <tbody>{renderedShows}</tbody>
    </table>
  );
};

TvShowsList.propTypes = {
  series: PropTypes.array.isRequired,
  removeSeries: PropTypes.func.isRequired,
};

export default TvShowsList;
