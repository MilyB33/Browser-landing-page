import React, { useReducer } from 'react';
import CryptoContext from './cryptoContext';
import CrytpoReducer from './cryptoReducer';
import { GET_COINS, ACTUAL_COIN } from '../types';

const CryptoState = (props) => {
  const initialState = {
    coins: [],
    actualCoin: {},
    loading: true,
  };

  const URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=pln&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  const [state, dispatch] = useReducer(CrytpoReducer, initialState);

  const getCoins = async () => {
    const res = await fetch(URL, {
      method: 'GET',
    });
    const data = await res.json();

    dispatch({
      type: GET_COINS,
      payload: data,
    });
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
        getCoins,
        getActualCoin,
      }}
    >
      {props.children}
    </CryptoContext.Provider>
  );
};

export default CryptoState;
