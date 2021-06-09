import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdAddCircleOutline as AddIcon } from 'react-icons/all';

const TasksForm = ({ onAdd }) => {
  const [task, setTask] = useState({
    title: '',
    time: '',
  });

  const { title, time } = task;

  const onSubmit = (event) => {
    event.preventDefault();

    if (title === '' || time === '') {
      return;
    }

    onAdd(task);

    setTask({
      title: '',
      time: '',
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
    </form>
  );
};

TasksForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TasksForm;
