import React, { useReducer } from 'react';
import CryptoContext from './cryptoContext';
import CrytpoReducer from './cryptoReducer';
import { GET_COINS, ACTUAL_COIN, SET_ERROR_COINS } from '../types';

const CryptoState = (props) => {
  const initialState = {
    coins: [],
    actualCoin: {},
    loading: true,
    error: false,
  };

  const URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const [state, dispatch] = useReducer(CrytpoReducer, initialState);

  const getCoins = async () => {
    try {
      const res = await fetch(URL, {
        method: 'GET',
      });

      const data = await res.json();

      dispatch({
        type: GET_COINS,
        payload: data,
      });
    } catch (err) {
      console.warn(err.message);

      dispatch({
        type: SET_ERROR_COINS,
      });
    }
  };

  const getActualCoin = (id) => {
    dispatch({
      type: ACTUAL_COIN,
      payload: id,
    });
  };

  return (
    <CryptoContext.Provider
      value={{
        coins: state.coins,
        actualCoin: state.actualCoin,
        loading: state.loading,
        error: state.error,
        getCoins,
        getActualCoin,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoState;
