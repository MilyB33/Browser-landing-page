import {
  TOGGLE_DEFAULT,
  TOGGLE_NAV,
  TOGGLE_OPTIONS,
  TOGGLE_COLORS,
  TOGGLE_BOOKMARKS,
  TOGGLE_ADD,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        showNav: !state.showNav,
      };
    case TOGGLE_DEFAULT: {
      return {
        ...state,
        showDefault: true,
        showOptions: false,
        showColors: false,
        showBookmarks: false,
        showAdd: false,
      };
    }
    case TOGGLE_OPTIONS:
      return {
        ...state,
        showDefault: false,
        showOptions: true,
        showColors: false,
        showBookmarks: false,
        showAdd: false,
      };

    case TOGGLE_COLORS:
      return {
        ...state,
        showDefault: false,
        showOptions: false,
        showColors: true,
        showBookmarks: false,
        showAdd: false,
      };
    case TOGGLE_BOOKMARKS:
      return {
        ...state,
        showDefault: false,
        showOptions: false,
        showColors: false,
        showBookmarks: true,
        showAdd: false,
      };
    case TOGGLE_ADD:
      return {
        ...state,
        showDefault: false,
        showOptions: false,
        showColors: false,
        showBookmarks: false,
        showAdd: true,
      };
    default:
      return state;
  }
};
