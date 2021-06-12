import React, { useContext, useEffect } from 'react';
import Tasks from './Tasks';
import TasksForm from './TasksForm';

import TasksContext from '../../context/Tasks/tasksContext';

const DailyTasks = () => {
  const tasksContext = useContext(TasksContext);
  const { tasks, getTasks, addTask, deleteTask } = tasksContext;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  return (
    <section className="daily__tasks container--widget">
      <h1 className="header">Your Daily Tasks :</h1>
      <TasksForm onAdd={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </section>
  );
};

export default DailyTasks;
