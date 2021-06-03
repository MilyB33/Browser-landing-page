import React, { useState, useEffect } from 'react';
import { WiCloud as CloudIcon } from 'react-icons/all';
const TimeWeather = () => {
  const [actualTime, setActualTime] = useState(new Date().toLocaleTimeString());
  const [actualDate, setActualDate] = useState(new Date().toLocaleDateString());

  useEffect(() => {
    setTimeout(() => {
      setActualTime(new Date().toLocaleTimeString());
    }, 1000);
  }, [actualTime]);

  return (
    <section className="time__weather">
      <h1 className="header__time">{actualTime}</h1>
      <span className="actual__date">{actualDate}</span>
      <span className="actual__weather">
        <CloudIcon />
        20<sup>o</sup>
      </span>
    </section>
  );
};

// const timeConfig = {
//   hour12: false,
//   hour: 'numeric',
//   minute: 'numeric',
// };

export default TimeWeather;
