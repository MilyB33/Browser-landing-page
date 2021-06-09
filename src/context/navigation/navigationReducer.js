import {
  TOGGLE_DEFAULT,
  TOGGLE_NAV,
  TOGGLE_OPTIONS,
  TOGGLE_COLORS,
  TOGGLE_BOOKMARKS,
  TOGGLE_ADD,
  TOGGLE_TASKS,
  TOGGLE_TVSHOWS,
  TOGGLE_SITES,
  TOGGLE_NOTES,
  TOGGLE_CRYPTO,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  TOGGLE_ALL,
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
    case TOGGLE_TASKS:
      return {
        ...state,
        showTasks: !state.showTasks,
      };
    case TOGGLE_TVSHOWS:
      return {
        ...state,
        showTvShows: !state.showTvShows,
      };
    case TOGGLE_SITES:
      return {
        ...state,
        showSites: !state.showSites,
      };
    case TOGGLE_NOTES:
      return {
        ...state,
        showNotes: !state.showNotes,
      };
    case TOGGLE_CRYPTO:
      return {
        ...state,
        showCrypto: !state.showCrypto,
      };
    case TOGGLE_ALL:
      return {
        ...state,
        showAll: !state.showAll,
        showTasks: state.showAll,
        showTvShows: state.showAll,
        showSites: state.showAll,
        showNotes: state.showAll,
        showCrypto: state.showAll,
      };
    case ADD_BOOKMARK:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== action.payload),
      };
    default:
      return state;
  }
};
