import React, { useState, useContext, useEffect } from 'react';
import CryptoContext from '../../context/Cryptocurrency/cryptoContext';
import Spinner from '../layout/Spinner';

const Crypto = () => {
  const cryptoContext = useContext(CryptoContext);
  const { coins, getCoins, getActualCoin, actualCoin, loading } = cryptoContext;

  // Need to be local state because can't pass object to option value
  const [price, setPrice] = useState('');

  useEffect(() => {
    getCoins();
    // eslint-disable-next-line
  }, []);

  // setting price after request (when actual Coin is setted)
  useEffect(() => {
    setPrice(actualCoin.current_price);
  }, [actualCoin]);

  if (loading)
    return (
      <section className="crypto">
        <Spinner />
      </section>
    );

  const renderedCoinsList = coins.map((coin) => (
    <option key={coin.id} name="cryptocurrency__name" value={coin.id} className="crypto__option">
      {coin.name}
    </option>
  ));

  return (
    <section className="container__widget crypto">
      <h1>Actual Cryptocurrency Price :</h1>
      <select
        name="coins"
        className="crypto__select"
        onChange={(event) => getActualCoin(event.target.value)}
        value={actualCoin.id}
      >
        {renderedCoinsList}
      </select>
      <h2 className="crypto__price">Price: {price} PLN</h2>
    </section>
  );
};

export default Crypto;
