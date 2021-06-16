import React, { useState } from 'react';
import { BsSearch as SearchIcon } from 'react-icons/all';

import PropTypes from 'prop-types';

const TvShowsForm = ({ onSearch }) => {
  const [text, setText] = useState('');

  return (
    <form onSubmit={(event) => onSearch(event, text, setText)}>
      <div className="premieres__controls">
        <input
          list="tvShows"
          placeholder="Search Tv Show..."
          name="movie/series"
          className="input__tvShow__title"
          value={text}
          onChange={(event) => setText(event.target.value)}
          required
        />
        <button className="input__tvShow__submit btn--icon" name="search-TvShow" title="Search">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

TvShowsForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default TvShowsForm;
