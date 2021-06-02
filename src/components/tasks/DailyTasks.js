import React from 'react';
import Tasks from './Tasks';
import TasksForm from './TasksForm';

const DailyTasks = () => {
  return (
    <div className="daily__tasks">
      <h1 className="header">Your Daily Tasks :</h1>
      <TasksForm />
      <Tasks />
    </div>
  );
};

export default DailyTasks;
