import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NoteEditForm = ({ id, title, content, updateNote }) => {
  const [noteData, setNoteData] = useState({
    title,
    content,
  });

  const onInputChange = (event) => {
    setNoteData({
      ...noteData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (noteData.title === '' || noteData.content === '') {
      return;
    }

    updateNote(id, noteData.title, noteData.content, false);
  };

  return (
    <form className="note__modify__form" onSubmit={onSubmit}>
      <input
        className="note__modify__title"
        type="text"
        value={noteData.title}
        name="title"
        onChange={onInputChange}
        title="Title"
        required
        autoComplete="off"
      />
      <textarea
        className="note__modify__content"
        name="content"
        value={noteData.content}
        onChange={onInputChange}
        title="Content"
        required
        autoComplete="off"
      />
      <button
        className="save__note btn--default"
        name="save-note-btn"
        title="Save"
      >
        Save
      </button>
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
