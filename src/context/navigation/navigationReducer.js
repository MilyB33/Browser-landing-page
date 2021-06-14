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
  TOGGLE_COLOR,
  GET_BOOKMARKS,
  GET_WIDGETS,
} from '../types';
// eslint-disable-next-line
export default (state, action) => {
  let temp = {};
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        showNav: !state.showNav,
      };
    case TOGGLE_DEFAULT: {
      return {
        ...state,
        navDisplays: {
          showDefault: true,
          showOptions: false,
          showColors: false,
          showBookmarks: false,
          showAdd: false,
        },
      };
    }
    case TOGGLE_OPTIONS:
      return {
        ...state,
        navDisplays: {
          showDefault: false,
          showOptions: true,
          showColors: false,
          showBookmarks: false,
          showAdd: false,
        },
      };

    case TOGGLE_COLORS:
      return {
        ...state,
        navDisplays: {
          showDefault: false,
          showOptions: false,
          showColors: true,
          showBookmarks: false,
          showAdd: false,
        },
      };
    case TOGGLE_BOOKMARKS:
      return {
        ...state,
        navDisplays: {
          showDefault: false,
          showOptions: false,
          showColors: false,
          showBookmarks: true,
          showAdd: false,
        },
      };
    case TOGGLE_ADD:
      return {
        ...state,
        navDisplays: {
          showDefault: false,
          showOptions: false,
          showColors: false,
          showBookmarks: false,
          showAdd: true,
        },
      };
    case GET_WIDGETS:
      return {
        ...state,
        ...(JSON.parse(localStorage.getItem('Widgets')) || {}),
      };
    case TOGGLE_TASKS:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showTasks: !state.widgetsDisplays.showTasks,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case TOGGLE_TVSHOWS:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showTvShows: !state.widgetsDisplays.showTvShows,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case TOGGLE_SITES:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showSites: !state.widgetsDisplays.showSites,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case TOGGLE_NOTES:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showNotes: !state.widgetsDisplays.showNotes,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case TOGGLE_CRYPTO:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showCrypto: !state.widgetsDisplays.showCrypto,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case TOGGLE_ALL:
      temp = {
        widgetsDisplays: {
          ...state.widgetsDisplays,
          showAll: !state.widgetsDisplays.showAll,
          showTasks: state.widgetsDisplays.showAll,
          showTvShows: state.widgetsDisplays.showAll,
          showSites: state.widgetsDisplays.showAll,
          showNotes: state.widgetsDisplays.showAll,
          showCrypto: state.widgetsDisplays.showAll,
        },
      };
      localStorage.setItem('Widgets', JSON.stringify(temp));
      return {
        ...state,
        ...temp,
      };
    case GET_BOOKMARKS:
      return {
        ...state,
        bookmarks: JSON.parse(localStorage.getItem('Bookmarks')) || [],
      };
    case ADD_BOOKMARK:
      localStorage.setItem('Bookmarks', JSON.stringify([...state.bookmarks, action.payload]));
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      localStorage.setItem(
        'Bookmarks',
        JSON.stringify(state.bookmarks.filter((bookmark) => bookmark.id !== action.payload))
      );
      return {
        ...state,
        bookmarks: state.bookmarks.filter((bookmark) => bookmark.id !== action.payload),
      };
    case TOGGLE_COLOR:
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};
