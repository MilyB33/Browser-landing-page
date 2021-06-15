import React from 'react';

import {
  AiFillYoutube as YoutubeIcon,
  FaFacebook as FacebookIcon,
  AiFillGithub as GithubIcon,
  RiNetflixFill as NetflixIcon,
  SiGmail as GmailIcon,
  // AiOutlineSearch as SearchIcon,
} from 'react-icons/all';

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://www.youtube.com/" className="socials__link" name="social-icon">
        <YoutubeIcon />
      </a>
      <a href="https://www.facebook.com/" className="socials__link" name="social-icon">
        <FacebookIcon />
      </a>
      <a href="https://github.com/" className="socials__link" name="social-icon">
        <GithubIcon />
      </a>
      <a href="https://www.netflix.com/" className="socials__link" name="social-icon">
        <NetflixIcon />
      </a>
      <a
        href="https://www.google.com/intl/pl/gmail/about/"
        className="socials__link"
        name="social-icon"
      >
        <GmailIcon />
      </a>
    </div>
  );
};

export default Socials;
