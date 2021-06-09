import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NoteEditForm from './NoteEditForm';
import NoteInfo from './NoteInfo';

const Note = ({ note: { id, title, content, edit }, toggleEdit, removeNote, updateNote }) => {
  return (
    <Fragment>
      {edit ? (
        <NoteEditForm id={id} title={title} content={content} updateNote={updateNote} />
      ) : (
        <NoteInfo
          id={id}
          title={title}
          content={content}
          toggleEdit={toggleEdit}
          removeNote={removeNote}
        />
      )}
    </Fragment>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
  toggleEdit: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
  updateNote: PropTypes.func.isRequired,
};

export default Note;
