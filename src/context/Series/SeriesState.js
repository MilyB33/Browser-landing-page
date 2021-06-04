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

  const getSeries = () => {
    dispatch({ type: GET_SERIES });
  };

  const addSeries = async (e, text) => {
    e.preventDefault();
    // console.log(`https://www.episodate.com/api/show-details?q=${text.replace(/ /g, '-')}`);
    const search = await fetch(`https://www.episodate.com/api/search?q=${text}&page=1`, {
      method: 'GET',
    });

    const permalink = await search.json();

    if (!permalink) return;

    const res = await fetch(
      `https://www.episodate.com/api/show-details?q=${permalink.tv_shows[0].permalink}`,
      {
        method: 'GET',
      }
    );

    const data = await res.json();
    console.log(data);

    const { id, name, url, countdown } = data.tvShow;

    dispatch({
      type: ADD_SERIES,
      payload: {
        id,
        name,
        airDate: countdown ? countdown.air_date.slice(0, 10) : 'Ended or Unknown', // temporary slice
        url,
      },
    });
  };

  const removeSeries = (id) => {
    dispatch({
      type: REMOVE_SERIES,
      payload: id,
    });
  };

  return (
    <SeriesContext.Provider
      value={{
        series: state.series,
        addSeries,
        getSeries,
        removeSeries,
      }}
    >
      {props.children}
    </SeriesContext.Provider>
  );
};

export default SeriesState;
