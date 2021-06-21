import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const Tasks = ({ tasks, deleteTask }) => {
  const renderedTasks = tasks.map((task) => (
    <Task key={task.id} task={task} deleteTask={deleteTask} />
  ));

  return <ul>{renderedTasks}</ul>;
};

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default Tasks;
