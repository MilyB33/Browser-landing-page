import React from 'react';

import Socials from './Socials';

import NavigationButton from '../navigation/NavigationButton';

const Search = () => {
  return (
    <section className="search container--widget">
      <Socials />
      <form method="GET" action="https://www.google.pl/search" className="search__form">
        <input
          name="q"
          type="text"
          placeholder="What's up doc? What are you looking for?"
          className="search__bar"
          autoComplete="off"
        />
        {/* <button>
          <SearchIcon />
        </button> */}
      </form>

      <NavigationButton />
    </section>
  );
};

export default Search;
