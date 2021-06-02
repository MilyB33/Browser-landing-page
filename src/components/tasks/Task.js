import React, { Fragment } from 'react';

const Task = ({ task: { title, time, content } }) => {
  return (
    <Fragment>
      <li className="task">
        <div className="task__info">
          <h3>
            {title} {time}
          </h3>
        </div>
        <p className="task__content">{content}</p>
      </li>
    </Fragment>
  );
};

export default Task;
