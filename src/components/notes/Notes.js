import React, { useEffect, useContext } from 'react';
import { IoMdAddCircle as AddIcon } from 'react-icons/all';
import Note from './Note';

import NotesContext from '../../context/notes/notesContext';

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const { getNotes, addNote, notes } = notesContext;

  useEffect(() => {
    getNotes();
    // esling-disable-next-line
  }, []);
  return (
    <section className="notes">
      <h1>My Notes :</h1>
      <button className="btn btn--add__note" onClick={addNote}>
        <AddIcon />
      </button>

      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </section>
  );
};

export default Notes;
