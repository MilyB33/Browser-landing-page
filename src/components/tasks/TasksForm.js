import React from 'react';
import { MdAddCircleOutline as AddIcon } from 'react-icons/all';

const TasksForm = () => {
  return (
    <div className="tasks__controls">
      <div className="tasks__controls__group">
        <input
          type="text"
          placeholder="Add Task..."
          name="Task__title"
          className="input__task__title"
        />
        <input type="time" name="Task__time" className="input__task__time" />
        <button className="input__task__submit">
          <AddIcon />
        </button>
      </div>

      <textarea name="Task__content" rows="2" className="input__task__content" />
    </div>
  );
};

export default TasksForm;
