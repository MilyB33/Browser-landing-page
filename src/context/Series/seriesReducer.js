import { ADD_SERIES, REMOVE_SERIES, GET_SERIES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_SERIES:
      return {
        ...state,
        series: [...state.series, action.payload],
      };
    default:
      return state;
  }
};
