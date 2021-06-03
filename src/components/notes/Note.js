import React from 'react';

const Note = ({ note: { id, title, content } }) => {
  const onDoubleClick = (id) => {
    console.log(id);
  };
  return (
    <div className="note" onDoubleClick={() => onDoubleClick(id)}>
      <h2 className="note__title">{title}</h2>
      <p className="note__content">{content}</p>
    </div>
  );
};

export default Note;
