import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NoteEditForm from './NoteEditForm';
import NoteInfo from './NoteInfo';

const Note = ({ note: { id, title, content, edit } }) => {
  return (
    <Fragment>
      {edit ? (
        <NoteEditForm id={id} title={title} content={content} />
      ) : (
        <NoteInfo id={id} title={title} content={content} />
      )}
    </Fragment>
  );
};

Note.propTypes = {
  note: PropTypes.object.isRequired,
};

export default Note;
