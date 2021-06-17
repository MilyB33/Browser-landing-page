import React, { useState, useContext, useEffect, Fragment } from 'react';
import CryptoContext from '../../context/Cryptocurrency/cryptoContext';
import Spinner from '../layout/Spinner';

const Crypto = () => {
  const cryptoContext = useContext(CryptoContext);
  const { coins, getCoins, getActualCoin, actualCoin, loading, error } = cryptoContext;

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

  const renderedCoinsList = coins.map((coin) => (
    <option key={coin.id} name="cryptocurrency__name" value={coin.id} className="crypto__option">
      {coin.name}
    </option>
  ));

  return (
    <section className="container__widget crypto">
      {error || (
        <Fragment>
          {loading ? (
            <Spinner />
          ) : (
            <Fragment>
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
            </Fragment>
          )}
        </Fragment>
      )}
    </section>
  );
};

export default Crypto;
