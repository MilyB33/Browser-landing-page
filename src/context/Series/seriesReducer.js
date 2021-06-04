import { ADD_SERIES, REMOVE_SERIES, GET_SERIES } from '../types';

export default (state, action) => {
  let actualState = {};
  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        series: JSON.parse(localStorage.getItem('TvShows')) || [],
      };
    case ADD_SERIES:
      actualState = {
        ...state,
        series: [...state.series, action.payload],
      };
      localStorage.setItem('TvShows', JSON.stringify(actualState.series));
      return actualState;
    case REMOVE_SERIES:
      actualState = {
        ...state,
        series: state.series.filter((show) => show.id !== action.payload),
      };
      localStorage.setItem('TvShows', JSON.stringify(actualState.series));
      return actualState;
    default:
      return state;
  }
};
