import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

const SearchResults = ({ tvShowsList, onSubmit }) => {
  return (
    <table className="search__results">
      <caption className="search__title">Search Results:</caption>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Add</th>
        </tr>
      </thead>
      <tbody>
        {tvShowsList.map((tvShow) => (
          <SearchResult key={tvShow.id} tvShow={tvShow} onSubmit={onSubmit} />
        ))}
      </tbody>
    </table>
  );
};

SearchResult.propTypes = {
  tvShowsList: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchResults;
