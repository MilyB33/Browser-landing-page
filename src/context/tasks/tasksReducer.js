import { ADD_TASK, REMOVE_TASK, GET_TASKS } from '../types';
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: JSON.parse(localStorage.getItem('Tasks')) || [],
      };
    case ADD_TASK:
      localStorage.setItem(
        'Tasks',
        JSON.stringify(
          [...state.tasks, action.payload].sort((a, b) => (a.time > b.time && 1) || -1)
        )
      );
      return {
        ...state,
        tasks: [...state.tasks, action.payload].sort((a, b) => (a.time > b.time && 1) || -1),
      };
    case REMOVE_TASK:
      localStorage.setItem(
        'Tasks',
        JSON.stringify(state.tasks.filter((task) => task.id !== action.payload))
      );
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
