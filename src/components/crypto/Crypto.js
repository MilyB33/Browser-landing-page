import React, { useState, useContext, useEffect } from 'react';
import CryptoContext from '../../context/Cryptocurrency/cryptoContext';

const Cypto = () => {
  const cryptoContext = useContext(CryptoContext);
  const { coins, getCoins, getActualCoin, actualCoin } = cryptoContext;
  // Need to be local state because can't pass object to option value
  const [price, setPrice] = useState('');

  useEffect(() => {
    getCoins();
  }, []);

  // setting price after request (when actual Coin is setted)
  useEffect(() => {
    setPrice(actualCoin.current_price);
  }, [actualCoin]);

  const onChange = (e) => {
    getActualCoin(e.target.value);
  };

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
