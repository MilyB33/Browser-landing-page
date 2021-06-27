import React from 'react';
import { IoMdRemoveCircleOutline as RemoveIcon } from 'react-icons/all';

const BookmarksList = ({ bookmarks, onDelete }) => {
  // This is for the sites which not provided easy path to favicon
  const onError = (event) => {
    event.target.onError = null;
    event.target.src =
      'https://pensive-payne-d85f31.netlify.app/favicon.ico';
  };

  const renderedBookmarks = bookmarks.map(
    ({ id, name, icon, url }) => (
      <li key={id} className="bookmark">
        <img
          src={icon}
          alt="bookmark icon"
          className="bookmark__icon"
          onError={onError}
        />
        <a href={url}>{name}</a>
        <button
          className="bookmark__remove__btn btn--icon"
          onClick={(event) => onDelete(event, id)}
        >
          <RemoveIcon />
        </button>
      </li>
    )
  );

  return <ul>{renderedBookmarks}</ul>;
};

export default BookmarksList;
