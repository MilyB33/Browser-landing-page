import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './SearchResult';

const SearchResults = ({ searchResults, addSeries, clearSearch }) => {
  const renderedResults = searchResults.map((tvShow) => (
    <SearchResult
      key={tvShow.id}
      tvShow={tvShow}
      addSeries={addSeries}
      clearSearch={clearSearch}
    />
  ));

  return (
    <table className="search__results">
      <caption className="search__title">
        <h3>Search Results:</h3>
        <button onClick={clearSearch} className="search__close">
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
  searchResults: PropTypes.array,
  addSeries: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};

export default SearchResults;
