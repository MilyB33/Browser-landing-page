import React, { useContext, useState } from 'react';
import { MdAddCircleOutline as AddIcon } from 'react-icons/all';
import TasksContext from '../../context/Tasks/tasksContext';

const TasksForm = () => {
  const tasksContext = useContext(TasksContext);

  const [task, setTask] = useState({
    title: '',
    time: '',
    content: '',
  });

  const { title, time, content } = task;

  const onSubmit = (e) => {
    e.preventDefault();
    tasksContext.addTask(task);

    setTask({
      title: '',
      time: '',
      content: '',
    });
  };

  return (
    <form className="tasks__form" onSubmit={onSubmit}>
      <div className="tasks__form__group">
        <input
          type="text"
          placeholder="Add Task..."
          name="title"
          className="input__task__title"
          onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
          value={title}
        />
        <input
          type="time"
          name="time"
          className="input__task__time"
          onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
          value={time}
        />
        <button className="input__task__submit">
          <AddIcon />
        </button>
      </div>

      <textarea
        name="content"
        rows="2"
        className="input__task__content"
        onChange={(e) => setTask({ ...task, [e.target.name]: e.target.value })}
        value={content}
      />
    </form>
  );
};

export default TasksForm;
