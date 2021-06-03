import React, { useState } from 'react';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      id: 0,
      title: 'First Note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum delectus sed nemo totam soluta tempore pariatur itaque vel accusamus adipisci saepe nam eveniet debitis esse, architecto voluptate ex enim?',
    },
    {
      id: 1,
      title: 'Second Note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum delectus sed nemo totam soluta tempore pariatur itaque vel accusamus adipisci saepe nam eveniet debitis esse, architecto voluptate ex enim?',
    },
    {
      id: 2,
      title: 'Third Note',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum illum delectus sed nemo totam soluta tempore pariatur itaque vel accusamus adipisci saepe nam eveniet debitis esse, architecto voluptate ex enim?',
    },
  ]);
  return (
    <section className="notes">
      <h1>My Notes :</h1>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </section>
  );
};

export default Notes;
