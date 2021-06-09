import React from 'react';
import {
  AiFillYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  AiFillGithub as GithubIcon,
  RiNetflixFill as NetflixIcon,
  SiGmail as GmailIcon,
  // AiOutlineSearch as SearchIcon,
} from 'react-icons/all';

import NavigationButton from '../navigation/NavigationButton';

const Search = () => {
  return (
    <main className="search">
      <div className="socials">
        <a href="youtube.com/" className="socials__link">
          <YoutubeIcon />
        </a>
        <a href="https://www.facebook.com/" className="socials__link">
          <FacebookIcon />
        </a>
        <a href="https://github.com/" className="socials__link">
          <GithubIcon />
        </a>
        <a href="https://www.netflix.com/" className="socials__link">
          <NetflixIcon />
        </a>
        <a href="https://www.google.com/intl/pl/gmail/about/" className="socials__link">
          <GmailIcon />
        </a>
      </div>
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
    </main>
  );
};

export default Search;
