import React, { Fragment } from 'react';
import { FiDelete as DeleteIcon } from 'react-icons/all';
const Premiere = ({ movie: { title, date } }) => {
  return (
    <Fragment>
      <li className="premiere">
        <h3 className="premiere__info">
          {title} {date}
        </h3>
        <button className="btn__premiere__delete">
          <DeleteIcon />
        </button>
      </li>
    </Fragment>
  );
};

export default Premiere;
