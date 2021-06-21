import {
  ADD_SERIES,
  REMOVE_SERIES,
  GET_SERIES,
  SEARCH_SERIES,
  CLEAR_SEARCH,
  SET_ERROR_SERIES,
  UPDATE_SERIES,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case GET_SERIES:
      return {
        ...state,
        series: JSON.parse(localStorage.getItem('TvShows')) || [],
        lastUpdate: localStorage.getItem('SeriesLastUpdate') || null,
      };
    case ADD_SERIES:
      localStorage.setItem(
        'TvShows',
        JSON.stringify(
          [...state.series, action.payload].sort(
            (a, b) => (a.airDate > b.airDate && 1) || -1
          )
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
        JSON.stringify(
          state.series.filter((show) => show.id !== action.payload)
        )
      );
      return {
        ...state,
        series: state.series.filter(
          (show) => show.id !== action.payload
        ),
      };
    case SEARCH_SERIES:
      return {
        ...state,
        searchResults: action.payload,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        searchResults: [],
      };
    case SET_ERROR_SERIES:
      return {
        ...state,
        error: true,
      };
    case UPDATE_SERIES:
      localStorage.setItem(
        'SeriesLastUpdate',
        new Date().toLocaleDateString()
      );
      return {
        ...state,
        series: state.series.map((tvShow) =>
          tvShow.id === action.payload.id ? action.payload : tvShow
        ),
        lastUpdate: new Date().toLocaleDateString(),
      };
    default:
      return state;
  }
};
