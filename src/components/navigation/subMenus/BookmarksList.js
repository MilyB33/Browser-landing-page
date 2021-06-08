import React from 'react';
import { IoMdRemoveCircleOutline as RemoveIcon } from 'react-icons/all';

const BookmarksList = ({ bookmarks, onDelete }) => {
  return (
    <ul>
      {bookmarks.map(({ id, name }) => (
        <li key={id} className="bookmark">
          <button className="bookmark__remove" onClick={(event) => onDelete(event, id)}>
            <RemoveIcon />
          </button>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookmarksList;
