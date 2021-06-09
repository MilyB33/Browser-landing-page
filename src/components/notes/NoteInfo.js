import React from 'react';
import { MdDeleteForever as DeleteIcon } from 'react-icons/all';
import PropTypes from 'prop-types';

const NoteInfo = ({ id, title, content, toggleEdit, removeNote }) => {
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
  toggleEdit: PropTypes.func.isRequired,
  removeNote: PropTypes.func.isRequired,
};

export default NoteInfo;
