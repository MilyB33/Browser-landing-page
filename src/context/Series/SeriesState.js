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

  const addSeries = async (id) => {
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
