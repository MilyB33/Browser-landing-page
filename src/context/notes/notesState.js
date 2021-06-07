import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesContext from './notesContext';
import NotesReducer from './notesReducer';
import { ADD_NOTE, GET_NOTES, REMOVE_NOTE, TOGGLE_EDIT, UPDATE_NOTE } from '../types';

const NotesState = (props) => {
  const initialState = {
    notes: [],
  };

  const defaultNote = {
    id: null,
    title: 'Default Title',
    content: 'Default content',
    edit: false,
  };

  const [state, dispatch] = useReducer(NotesReducer, initialState);

  const getNotes = () => dispatch({ type: GET_NOTES });

  const addNote = () => {
    const newNote = defaultNote;
    newNote.id = uuidv4();
    dispatch({
      type: ADD_NOTE,
      payload: newNote,
    });
  };

  const updateNote = (id, title, content, edit) => {
    dispatch({
      type: UPDATE_NOTE,
      payload: {
        id,
        title,
        content,
        edit,
      },
    });
  };

  const toggleEdit = (id, edit) => dispatch({ type: TOGGLE_EDIT, payload: { id, edit } });

  const removeNote = (id) => dispatch({ type: REMOVE_NOTE, payload: id });

  return (
    <NotesContext.Provider
      value={{
        notes: state.notes,
        addNote,
        updateNote,
        toggleEdit,
        getNotes,
        removeNote,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
