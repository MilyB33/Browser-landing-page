import React, { useState } from 'react';
import Premiere from './Premiere';

const Premieres = () => {
  const [movies, setMovies] = useState([
    {
      id: 0,
      title: 'Rick and Morty',
      date: '12/12/2021',
    },
    {
      id: 1,
      title: 'Rick and Morty',
      date: '12/12/2021',
    },
    {
      id: 2,
      title: 'Rick and Morty',
      date: '12/12/2021',
    },
  ]);
  return (
    <ul className="container">
      {movies.map((movie) => (
        <Premiere key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default Premieres;
