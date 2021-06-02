import React from 'react';
import { MdAddCircleOutline as AddIcon } from 'react-icons/all';
const PremieresForm = () => {
  return (
    <div className="premieres__controls">
      <input
        type="text"
        placeholder="Search movie/series..."
        name="movie/series"
        className="input__movie__title"
      />
      <button className="input__movie__submit">
        <AddIcon />
      </button>
    </div>
  );
};

export default PremieresForm;
