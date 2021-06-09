import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NoteEditForm = ({ id, title, content, updateNote }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const onSubmit = (event) => {
    event.preventDefault();

    if (newTitle === '' || newContent === '') {
      return;
    }

    updateNote(id, newTitle, newContent, false);
  };

  return (
    <form className="note__modify__form" onSubmit={onSubmit}>
      <input
        className="note__modify__title"
        type="text"
        value={newTitle}
        name="title"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        className="note__modify__content"
        name="content"
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <button className="btn--save__note">Save</button>
    </form>
  );
};

NoteEditForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default NoteEditForm;
