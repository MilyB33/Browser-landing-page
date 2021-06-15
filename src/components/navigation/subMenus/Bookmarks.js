import React, { useContext, useState } from 'react';
import SubMenus from './SubMenus';
import BookmarksList from './BookmarksList';
import NavigationContext from '../../../context/navigation/navigationContext';

const Bookmarks = () => {
  const navigationContext = useContext(NavigationContext);

  const [bookmark, setBookmark] = useState({
    url: '',
    name: '',
  });

  const { url, name } = bookmark;

  const onChange = (event) => {
    setBookmark({
      ...bookmark,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    navigationContext.addBookmark(url, name);
  };

  const onDelete = (event, id) => {
    event.preventDefault();
    navigationContext.removeBookmark(id);
  };

  return (
    <SubMenus onSubmit={onFormSubmit}>
      <h1>Bookmarks</h1>

      <label className="bookmark__label" htmlFor="url">
        URL
      </label>
      <input
        type="url"
        name="url"
        className="bookmarks__input"
        value={url}
        onChange={onChange}
        required
      />

      <label className="bookmark__label" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="bookmarks__input"
        value={name}
        onChange={onChange}
        required
      />

      <button className="bookmarks__submit" name="add-site" title="Add Site">
        Add Site
      </button>

      <h2>Your bookmarks: </h2>
      <BookmarksList bookmarks={navigationContext.bookmarks} onDelete={onDelete} />
    </SubMenus>
  );
};

export default Bookmarks;
