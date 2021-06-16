import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { onRemoveAnim } from '../animations/Animations';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const Task = ({ task: { id, title, time }, deleteTask }) => {
  const ref = useRef(null);
  return (
    <li className="task" ref={ref}>
      <h3 className="task__title">{title}</h3>
      <time className="task__time">{time}</time>
      <div className="task__controls">
        <button
          className="btn--icon"
          onClick={() => onRemoveAnim(ref.current, deleteTask, id)}
          name="delete-task"
          title="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
