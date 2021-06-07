import React, { useState, useEffect } from 'react';
import Spinner from '../layout/Spinner';
import Temperature from './Temperature';

const TimeWeather = () => {
  const [actualTime, setActualTime] = useState(new Date().toLocaleTimeString());
  const [actualDate, setActualDate] = useState(new Date().toLocaleDateString());
  const [actualTemperature, setActualTemperature] = useState({
    temp: null,
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setActualTime(new Date().toLocaleTimeString());
      if (actualTime === '00:00:01') setActualDate(new Date().toLocaleDateString());
    }, 1000);
  }, [actualTime]);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const res = await fetch(
          `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`,
          {
            method: 'GET',
          }
        );
        const data = await res.json();
        console.log(data);
        setActualTemperature({ temp: data.dataseries[0].temp2m.max, loading: false });
      },
      (err) => {
        console.log(err);
      }
    );
    // eslint-disable-next-line
  }, []);

  return (
    <section className="time__weather">
      <h1 className="header__time">{actualTime}</h1>
      <span className="actual__date">{actualDate}</span>
      <span className="actual__weather">
        {actualTemperature.loading ? (
          <Spinner />
        ) : (
          <Temperature temperature={actualTemperature.temp} />
        )}
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
