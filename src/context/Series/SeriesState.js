import React, { useReducer } from 'react';
import SeriesContext from './seriesContext';
import SeriesReducer from './seriesReducer';
import { ADD_SERIES, REMOVE_SERIES, GET_SERIES } from '../types';

const SeriesState = (props) => {
  const initialState = {
    series: [],
  };

  const URL = 'https://www.episodate.com/api/show-details?q=';

  const [state, dispatch] = useReducer(SeriesReducer, initialState);

  const addSeries = async (e, text) => {
    e.preventDefault();
    // console.log(`https://www.episodate.com/api/show-details?q=${text.replace(/ /g, '-')}`);
    const res = await fetch(
      `https://www.episodate.com/api/show-details?q=${text.replace(/ /g, '-')}`,
      {
        method: 'GET',
      }
    );

    const data = await res.json();

    const { id, name, url, countdown } = data.tvShow;

    dispatch({
      type: ADD_SERIES,
      payload: {
        id,
        name,
        airDate: countdown ? countdown.airDate : 'unknown',
        url,
      },
    });
  };

  return (
    <SeriesContext.Provider
      value={{
        series: state.series,
        addSeries,
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesState;
