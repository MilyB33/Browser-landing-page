import React from 'react';
import PropTypes from 'prop-types';

import { IoMdAdd as AddIcon } from 'react-icons/all';

const SearchResult = ({
  tvShow: { id, name, status },
  addSeries,
  clearSearch,
}) => {
  const onSubmit = (event) => {
    event.preventDefault();
    addSeries(id);
    clearSearch();
  };

  return (
    <tr className="search__item">
      <td>{id}</td>
      <td>{name}</td>
      <td>{status}</td>
      <td className="search__add">
        <button className="btn--icon" onClick={onSubmit}>
          <AddIcon />
        </button>
      </td>
    </tr>
  );
};

SearchResult.propTypes = {
  tvShow: PropTypes.object.isRequired,
  addSeries: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default SearchResult;
