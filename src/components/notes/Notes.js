import React, { useEffect, useContext } from 'react';
import { IoMdAddCircle as AddIcon } from 'react-icons/all';
import Note from './Note';

import NotesContext from '../../context/notes/notesContext';

const Notes = () => {
  const notesContext = useContext(NotesContext);
  const {
    getNotes,
    addNote,
    notes,
    toggleEdit,
    removeNote,
    updateNote,
  } = notesContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const renderedNotes = notes.map((note) => (
    <Note
      key={note.id}
      note={note}
      toggleEdit={toggleEdit}
      removeNote={removeNote}
      updateNote={updateNote}
    />
  ));

  return (
    <section className="notes container--widget container--widget__background">
      <h1>My Notes :</h1>

      <button
        className="btn--icon"
        onClick={addNote}
        name="add-note"
        title="Add Note"
      >
        <AddIcon />
      </button>

      {renderedNotes}
    </section>
  );
};

export default Notes;
