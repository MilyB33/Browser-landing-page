import { ADD_NOTE, GET_NOTES, REMOVE_NOTE, TOGGLE_EDIT, UPDATE_NOTE } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: JSON.parse(localStorage.getItem('Notes')) || [],
      };
    case ADD_NOTE:
      localStorage.setItem('Notes', JSON.stringify([...state.notes, action.payload]));
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case UPDATE_NOTE:
      localStorage.setItem(
        'Notes',
        JSON.stringify(
          state.notes.map((note) => (note.id === action.payload.id ? action.payload : note))
        )
      );
      return {
        ...state,
        notes: state.notes.map((note) => (note.id === action.payload.id ? action.payload : note)),
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) note.edit = action.payload.edit;
          return note;
        }),
      };
    case REMOVE_NOTE:
      localStorage.setItem(
        'Notes',
        JSON.stringify(state.notes.filter((note) => note.id !== action.payload))
      );
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};
