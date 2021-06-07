import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import NotesContext from '../../context/notes/notesContext';

const NoteEditForm = ({ id, title, content }) => {
  const notesContext = useContext(NotesContext);
  const { updateNote } = notesContext;

  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const onSubmit = (e) => {
    e.preventDefault();
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
};

export default NoteEditForm;
