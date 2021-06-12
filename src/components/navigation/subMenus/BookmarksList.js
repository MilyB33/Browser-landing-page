import React from 'react';
import { IoMdRemoveCircleOutline as RemoveIcon } from 'react-icons/all';

const BookmarksList = ({ bookmarks, onDelete }) => {
  const renderedBookmarks = bookmarks.map(({ id, name }) => (
    <li key={id} className="bookmark">
      <button className="bookmark__remove__btn btn--icon" onClick={(event) => onDelete(event, id)}>
        <RemoveIcon />
      </button>
      <p>{name}</p>
    </li>
  ));

  return <ul>{renderedBookmarks}</ul>;
};

export default BookmarksList;
