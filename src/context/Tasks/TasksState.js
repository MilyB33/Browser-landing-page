import React, { useReducer } from 'react';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import { ADD_TASK, REMOVE_TASK, GET_TASKS } from '../types';

const TasksState = (props) => {
  const initialState = {
    tasks: [],
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  const getTasks = () => {
    dispatch({ type: GET_TASKS });
  };

  const addTask = (task) => {
    task.id = state.tasks.length;

    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };

  const deleteTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        addTask,
        getTasks,
        deleteTask,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
