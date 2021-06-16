import React, { useRef } from 'react';
import { onRemoveAnim } from '../animations/Animations';
import { MdDeleteForever as DeleteIcon } from 'react-icons/all';
import PropTypes from 'prop-types';

const NoteInfo = ({ id, title, content, toggleEdit, removeNote }) => {
  const ref = useRef(null);

  return (
    <article className="note" onDoubleClick={() => toggleEdit(id, true)} ref={ref}>
      <h3 className="note__title">
        {title}

        <button
          className="note__delete__btn btn--icon"
          onClick={() => onRemoveAnim(ref.current, removeNote, id)}
          name="delete-note"
          title="Delete"
        >
          <DeleteIcon />
        </button>
      </h3>

      <p className="note__content">{content}</p>
    </article>
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
