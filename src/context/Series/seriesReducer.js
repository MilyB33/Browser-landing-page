import { ADD_SERIES, REMOVE_SERIES, GET_SERIES } from '../types';
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        series: JSON.parse(localStorage.getItem('TvShows')) || [],
      };
    case ADD_SERIES:
      localStorage.setItem(
        'TvShows',
        JSON.stringify(
          [...state.series, action.payload].sort((a, b) => (a.airDate > b.airDate && 1) || -1)
        )
      );
      return {
        ...state,
        series: [...state.series, action.payload].sort(
          (a, b) => (a.airDate > b.airDate && 1) || -1
        ),
      };
    case REMOVE_SERIES:
      localStorage.setItem(
        'TvShows',
        JSON.stringify(state.series.filter((show) => show.id !== action.payload))
      );
      return {
        ...state,
        series: state.series.filter((show) => show.id !== action.payload),
      };
    default:
      return state;
  }
};
