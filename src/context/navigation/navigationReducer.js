import {
  TOGGLE_DEFAULT,
  TOGGLE_NAV,
  TOGGLE_OPTIONS,
  TOGGLE_COLORS,
  TOGGLE_BOOKMARKS,
  TOGGLE_ABOUT,
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
  SET_DEFAULT_COLORS,
  GET_COLORS,
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
          showAbout: false,
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
          showAbout: false,
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
          showAbout: false,
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
          showAbout: false,
        },
      };
    case TOGGLE_ABOUT:
      return {
        ...state,
        navDisplays: {
          showDefault: false,
          showOptions: false,
          showColors: false,
          showBookmarks: false,
          showAbout: true,
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
        bookmarks:
          JSON.parse(localStorage.getItem('Bookmarks')) || [],
      };
    case ADD_BOOKMARK:
      localStorage.setItem(
        'Bookmarks',
        JSON.stringify([...state.bookmarks, action.payload])
      );
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload],
      };
    case REMOVE_BOOKMARK:
      localStorage.setItem(
        'Bookmarks',
        JSON.stringify(
          state.bookmarks.filter(
            (bookmark) => bookmark.id !== action.payload
          )
        )
      );
      return {
        ...state,
        bookmarks: state.bookmarks.filter(
          (bookmark) => bookmark.id !== action.payload
        ),
      };
    case GET_COLORS:
      return {
        ...state,
        ...JSON.parse(localStorage.getItem('Colors')),
      };
    case TOGGLE_COLOR:
      localStorage.setItem(
        'Colors',
        JSON.stringify({
          colors: {
            ...state.colors,
            [action.payload.id]: action.payload.value,
          },
        })
      );
      return {
        ...state,
        colors: {
          ...state.colors,
          [action.payload.id]: action.payload.value,
        },
      };
    case SET_DEFAULT_COLORS:
      localStorage.setItem(
        'Colors',
        JSON.stringify({
          colors: {
            ...state.colors,
            ...action.payload,
          },
        })
      );
      return {
        ...state,
        colors: {
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
