import React, { useReducer } from 'react';
import SeriesContext from './seriesContext';
import SeriesReducer from './seriesReducer';
import fetchSeries from '../apis/series';
import {
  ADD_SERIES,
  REMOVE_SERIES,
  GET_SERIES,
  SEARCH_SERIES,
  CLEAR_SEARCH,
  SET_ERROR_SERIES,
  UPDATE_SERIES,
} from '../types';

const SeriesState = (props) => {
  const initialState = {
    series: [],
    searchResults: [],
    error: false,
    lastUpdate: null,
  };

  const [state, dispatch] = useReducer(SeriesReducer, initialState);

  const getSeries = () => {
    dispatch({ type: GET_SERIES });
  };

  const addSeries = async (id) => {
    try {
      const data = await _fetchSeries('show-details?q=', id);

      const { name, url, countdown, status } = data.tvShow;

      if (state.series.some((tvShow) => tvShow.id === id)) {
        return;
      }

      dispatch({
        type: ADD_SERIES,
        payload: {
          id,
          name,
          airDate:
            status === 'Ended' || status === 'Canceled'
              ? status
              : countdown?.air_date.slice(0, 10) || 'Unknown', // temporary slice
          url,
        },
      });
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: SET_ERROR_SERIES });
    }
  };

  const removeSeries = (id) => {
    dispatch({
      type: REMOVE_SERIES,
      payload: id,
    });
  };

  const searchSeries = async (text) => {
    try {
      const data = await _fetchSeries('search?q=', null, text);

      dispatch({
        type: SEARCH_SERIES,
        payload: data.tv_shows,
      });
    } catch (err) {
      console.warn(err.message);
      dispatch({ type: SET_ERROR_SERIES });
    }
  };

  const clearSearch = () => dispatch({ type: CLEAR_SEARCH });

  const updateSeries = () => {
    const today = new Date().toLocaleDateString();
    if (state.lastUpdate === today) return;

    state.series.forEach(async ({ id }) => {
      try {
        const data = await _fetchSeries('show-details?q=', id);

        const { name, url, countdown } = data.tvShow;

        dispatch({
          type: UPDATE_SERIES,
          payload: {
            id,
            name,
            airDate: countdown
              ? countdown.air_date.slice(0, 10)
              : 'Ended or Unknown', // temporary slice
            url,
          },
        });
      } catch (err) {
        console.warn(err.message);
        dispatch({ type: SET_ERROR_SERIES });
      }
    });
  };

  const _fetchSeries = async (url, id, text) => {
    const response = await fetchSeries.get(`/${url}${id || text}`);
    return response.data;
  };

  return (
    <SeriesContext.Provider
      value={{
        series: state.series,
        searchResults: state.searchResults,
        error: state.error,
        addSeries,
        getSeries,
        removeSeries,
        searchSeries,
        clearSearch,
        updateSeries,
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesState;
