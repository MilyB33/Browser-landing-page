import { ACTUAL_COIN, GET_COINS } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COINS:
      return {
        ...state,
        coins: action.payload,
        actualCoin: action.payload[0],
        loading: false,
      };
    case ACTUAL_COIN:
      return {
        ...state,
        actualCoin: state.coins.find((coin) => coin.id === action.payload),
      };
    default:
      return state;
  }
};
