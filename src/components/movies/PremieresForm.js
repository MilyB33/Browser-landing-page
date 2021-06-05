import React, { useContext, useState } from 'react';
import { MdAddCircleOutline as AddIcon } from 'react-icons/all';
import SeriesContext from '../../context/Series/seriesContext';
const PremieresForm = () => {
  const seriesContext = useContext(SeriesContext);

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    seriesContext.addSeries(e, text);
    setText('');
  };

  return (
    <form className="premieres__controls" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search movie/series..."
        name="movie/series"
        className="input__movie__title"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="input__movie__submit">
        <AddIcon />
      </button>
    </form>
  );
};

export default PremieresForm;
