import React, { useState, useContext, useEffect } from 'react';
import CryptoContext from '../../context/Cryptocurrency/cryptoContext';
import Spinner from '../layout/Spinner';

const Cypto = () => {
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

  const onChange = (event) => {
    getActualCoin(event.target.value);
  };

  if (loading)
    return (
      <section className="crypto">
        <Spinner />
      </section>
    );

  return (
    <section className="crypto">
      <h1>Actual Cryptocurrency Price :</h1>
      <select name="coins" className="crypto__select" onChange={onChange} value={actualCoin.id}>
        {coins.map((coin) => (
          <option key={coin.id} value={coin.id} className="crypto__option">
            {coin.name}
          </option>
        ))}
      </select>
      <p className="crypto__price">Price: {price} PLN</p>
    </section>
  );
};

export default Cypto;
