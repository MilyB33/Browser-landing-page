import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdAddCircleOutline as AddIcon } from 'react-icons/all';

const TasksForm = ({ onFormSubmit }) => {
  const [task, setTask] = useState({
    title: '',
    time: '12:00',
  });

  const { title, time } = task;

  const onInputChange = (event) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(task);
    setTask({
      title: '',
      time: '12:00',
    });
  };

  return (
    <form className="tasks__form" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Add Task..."
        name="title"
        className="input__task__title"
        onChange={onInputChange}
        value={title}
      />
      <input
        type="time"
        name="time"
        className="input__task__time"
        onChange={onInputChange}
        value={time}
      />
      <button className="input__task__btn btn--icon">
        <AddIcon />
      </button>
    </form>
  );
};

TasksForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TasksForm;
