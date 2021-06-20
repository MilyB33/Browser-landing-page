import React, { useReducer } from 'react';
import CryptoContext from './cryptoContext';
import CrytpoReducer from './cryptoReducer';
import fetchCrypto from '../apis/crypto';
import { GET_COINS, ACTUAL_COIN, SET_ERROR_COINS } from '../types';

const CryptoState = (props) => {
  const initialState = {
    coins: [],
    actualCoin: {},
    loading: true,
    error: false,
  };

  const [state, dispatch] = useReducer(CrytpoReducer, initialState);

  const getCoins = async () => {
    try {
      const response = await fetchCrypto.get();
      const { data } = response;

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
