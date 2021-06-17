import React, { useReducer } from 'react';
import SeriesContext from './seriesContext';
import SeriesReducer from './seriesReducer';
import {
  ADD_SERIES,
  REMOVE_SERIES,
  GET_SERIES,
  SEARCH_SERIES,
  CLEAR_SEARCH,
  SET_ERROR_SERIES,
} from '../types';

const SeriesState = (props) => {
  const initialState = {
    series: [],
    searchResults: [],
    error: false,
  };

  const URL = 'https://www.episodate.com/api/show-details?q=';

  const [state, dispatch] = useReducer(SeriesReducer, initialState);

  const getSeries = () => {
    dispatch({ type: GET_SERIES });
  };

  const addSeries = async (id) => {
    try {
      const res = await fetch(`${URL}${id}`, {
        method: 'GET',
      });

      const data = await res.json();
      console.log(data);

      const { name, url, countdown } = data.tvShow;

      if (state.series.some((tvShow) => tvShow.id === id)) {
        console.log('jest');
        return;
      }

      dispatch({
        type: ADD_SERIES,
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
  };

  const removeSeries = (id) => {
    dispatch({
      type: REMOVE_SERIES,
      payload: id,
    });
  };

  const searchSeries = async (text) => {
    try {
      const search = await fetch(
        `https://www.episodate.com/api/search?q=${text}&page=1`,
        {
          method: 'GET',
        }
      );

      const data = await search.json();
      // console.log(data.tv_shows);
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
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesState;
