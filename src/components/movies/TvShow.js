import React from 'react';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const TvShow = ({ tvShow: { id, name, airDate }, removeSeries }) => {
  return (
    <li className="premiere">
      <h3 className="premiere__info">
        {name} {airDate}
      </h3>
      <button className="btn__premiere__delete" onClick={() => removeSeries(id)}>
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
