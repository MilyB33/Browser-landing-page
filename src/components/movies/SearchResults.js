import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

const SearchResults = ({ tvShowsList, onSubmit }) => {
  const renderedResults = tvShowsList.map((tvShow) => (
    <SearchResult key={tvShow.id} tvShow={tvShow} onSubmit={onSubmit} />
  ));

  return (
    <table className="search__results">
      <caption className="search__title">
        <h3>Search Results:</h3>
        <button onClick={onSubmit} className="search__close">
          Close
        </button>
      </caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>{renderedResults}</tbody>
    </table>
  );
};

SearchResult.propTypes = {
  tvShowsList: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchResults;
