import React from 'react';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const TvShow = ({ tvShow: { id, name, airDate }, removeSeries }) => {
  return (
    <li className="tvShow">
      <h4 className="tvShow__info">
        {name} {airDate}
      </h4>
      <button className="btn__tvShow__delete btn--icon" onClick={() => removeSeries(id)}>
        <DeleteIcon />
      </button>
    </li>
  );
};

TvShow.propTypes = {
  tvShow: PropTypes.object.isRequired,
  removeSeries: PropTypes.func.isRequired,
};

export default TvShow;
