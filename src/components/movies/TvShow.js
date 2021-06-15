import React from 'react';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const TvShow = ({ tvShow: { id, name, airDate }, removeSeries }) => {
  return (
    <tr className="tvShow__item">
      <td>
        <h4>{name}</h4>
      </td>
      <td>
        <h4>{airDate}</h4>
      </td>
      <td>
        <button
          className=" btn--icon"
          onClick={() => removeSeries(id)}
          name="delete-TvShow"
          title="Delete"
        >
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};

TvShow.propTypes = {
  tvShow: PropTypes.object.isRequired,
  removeSeries: PropTypes.func.isRequired,
};

export default TvShow;
