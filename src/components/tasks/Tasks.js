import React, { useContext, useEffect } from 'react';
import Task from './Task';

import TasksContext from '../../context/Tasks/tasksContext';

const Tasks = () => {
  const tasksContext = useContext(TasksContext);
  const { tasks, getTasks } = tasksContext;

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <ul className="container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
