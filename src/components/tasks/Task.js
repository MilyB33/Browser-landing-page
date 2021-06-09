import React from 'react';
import PropTypes from 'prop-types';

import { FiDelete as DeleteIcon } from 'react-icons/all';

const Task = ({ task: { id, title, time }, deleteTask }) => {
  return (
    <li className="task">
      <div className="task__info">
        <h3>
          {title} {time}
        </h3>
        <div className="task__controls">
          <input type="checkbox" name="" id="" />
          <button onClick={() => deleteTask(id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </li>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export default Task;
