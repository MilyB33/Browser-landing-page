import React from 'react';
import { IoMdRemoveCircleOutline as RemoveIcon } from 'react-icons/all';

const BookmarksList = ({ bookmarks, onDelete }) => {
  const renderedBookmarks = bookmarks.map(({ id, name, icon, url }) => (
    <li key={id} className="bookmark">
      <img src={icon} alt="bookmark icon" />
      <a href={url}>{name}</a>
      <button className="bookmark__remove__btn btn--icon" onClick={(event) => onDelete(event, id)}>
        <RemoveIcon />
      </button>
    </li>
  ));

  return <ul>{renderedBookmarks}</ul>;
};

export default BookmarksList;
