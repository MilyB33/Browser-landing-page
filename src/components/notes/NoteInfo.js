import React, { useContext } from 'react';
import { MdDeleteForever as DeleteIcon } from 'react-icons/all';
import PropTypes from 'prop-types';

import NotesContext from '../../context/notes/notesContext';

const NoteInfo = ({ id, title, content }) => {
  const notesContext = useContext(NotesContext);
  const { toggleEdit, removeNote } = notesContext;

  return (
    <div className="note" onDoubleClick={() => toggleEdit(id, true)}>
      <h2 className="note__title">
        {title}
        <button className="btn--delete__note" onClick={() => removeNote(id)}>
          <DeleteIcon />
        </button>
      </h2>
      <p className="note__content">{content}</p>
    </div>
  );
};

NoteInfo.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NoteInfo;
