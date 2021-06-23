import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdAddCircleOutline as AddIcon } from 'react-icons/all';

const TasksForm = ({ onFormSubmit }) => {
  const [task, setTask] = useState({
    title: '',
    time: '12:00',
  });

  const { title, time } = task;

  const onInputChange = (event) =>
    setTask({ ...task, [event.target.name]: event.target.value });

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(task);
    setTask({
      title: '',
      time: '12:00',
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="tasks__controls">
        <input
          type="text"
          placeholder="Add Task..."
          name="title"
          className="input__task__title"
          onChange={onInputChange}
          value={title}
          required
          autoComplete="off"
        />
        <input
          type="time"
          name="time"
          className="input__task__time"
          onChange={onInputChange}
          value={time}
          required
        />
        <button
          className="input__task__btn btn--icon"
          name="add-task"
          title="Add Task"
        >
          <AddIcon />
        </button>
      </div>
    </form>
  );
};

TasksForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default TasksForm;
