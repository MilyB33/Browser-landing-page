import React from 'react';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const Task = ({ task: { id, title, time }, deleteTask }) => {
  return (
    <li className="task">
      <h3 className="task__title">{title}</h3>
      <time className="task__time">{time}</time>
      <div className="task__controls">
        <input type="checkbox" name="" id="" />
        <button className="btn--icon" onClick={() => deleteTask(id)}>
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
