import React, { Fragment, useContext } from 'react';
import { FiDelete as DeleteIcon } from 'react-icons/all';
import SeriesContext from '../../context/Series/seriesContext';
const Premiere = ({ TvShow: { id, name, airDate } }) => {
  const seriesContext = useContext(SeriesContext);

  return (
    <Fragment>
      <li className="premiere">
        <h3 className="premiere__info">
          {name} {airDate}
        </h3>
        <button className="btn__premiere__delete" onClick={() => seriesContext.removeSeries(id)}>
          <DeleteIcon />
        </button>
      </li>
    </Fragment>
  );
};

export default Premiere;
