import React, { useState } from 'react';

const Cypto = () => {
  const [cryptos, setCryptos] = useState([
    {
      id: 0,
      name: 'Bitcoin',
      price: '134000',
    },
    {
      id: 1,
      name: 'Dogecoin',
      price: '25000',
    },
    {
      id: 2,
      name: 'Etherum',
      price: '36000',
    },
  ]);
  const [actualCrypto, setActualCrypto] = useState(cryptos[0]);

  const onChange = (cryptoName) => {
    setActualCrypto(() => {
      return cryptos.find((crypto) => crypto.name === cryptoName);
    });
  };

  return (
    <section className="crypto">
      <h1>Actual Cryptocurrency Price :</h1>
      <select
        name="Cryptocurrency"
        value={actualCrypto.name}
        onChange={(e) => onChange(e.target.value)}
        className="crypto__select"
      >
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.name} className="crypto__option">
            {crypto.name}
          </option>
        ))}
      </select>
      <p className="crypto__price">Price: {actualCrypto.price} zł</p>
    </section>
  );
};

export default Cypto;
