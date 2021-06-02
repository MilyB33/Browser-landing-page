import React, { useState } from 'react';
import Task from './Task';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 0,
      title: 'Title',
      time: '12:00',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 1,
      title: 'Title',
      time: '12:00',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 2,
      title: 'Title',
      time: '12:00',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ]);

  return (
    <ul className="container">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default Tasks;
