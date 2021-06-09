import React from 'react';
import PropTypes from 'prop-types';

import { IoMdAdd as AddIcon } from 'react-icons/all';

const SearchResult = ({ tvShow: { id, name, status }, onSubmit }) => {
  return (
    <tr className="search__item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td className="search__add">
        <button className="search__add--btn" onClick={(event) => onSubmit(event, id)}>
          <AddIcon />
        </button>
      </td>
    </tr>
  );
};

SearchResult.propTypes = {
  tvShow: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchResult;
