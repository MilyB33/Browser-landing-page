import React, { useRef } from 'react';
import { onRemoveAnim } from '../animations/Animations';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const TvShow = ({
  tvShow: { id, name, airDate, url },
  removeSeries,
}) => {
  const ref = useRef(null);

  return (
    <tr className="tvShow__item" ref={ref}>
      <td>
        <a href={url} name="tvShowLink">
          <h4>{name}</h4>
        </a>
      </td>
      <td>
        <h4>{airDate}</h4>
      </td>
      <td>
        <button
          className=" btn--icon"
          onClick={() => onRemoveAnim(ref.current, removeSeries, id)}
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
