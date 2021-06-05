import React, { Fragment, useContext } from 'react';
import { FiDelete as DeleteIcon } from 'react-icons/all';
import TasksContext from '../../context/Tasks/tasksContext';

const Task = ({ task: { id, title, time, content } }) => {
  const tasksContext = useContext(TasksContext);

  return (
    <Fragment>
      <li className="task">
        <div className="task__info">
          <h3>
            {title} {time}
          </h3>
          <div className="task__controls">
            <input type="checkbox" name="" id="" />
            <button onClick={() => tasksContext.deleteTask(id)}>
              <DeleteIcon />
            </button>
          </div>
        </div>
        <p className="task__content">{content}</p>
      </li>
    </Fragment>
  );
};

export default Task;
