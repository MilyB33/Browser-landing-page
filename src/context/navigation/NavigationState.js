import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NavigationContext from './navigationContext';
import NavigationReducer from './navigationReducer';
import {
  TOGGLE_NAV,
  TOGGLE_DEFAULT,
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
} from '../types';

const NavigationState = (props) => {
  const initialState = {
    showNav: false,
    navDisplays: {
      showDefault: true,
      showOptions: false,
      showColors: false,
      showBookmarks: false,
      showAbout: false,
    },

    widgetsDisplays: {
      showTasks: true,
      showTvShows: true,
      showSites: true,
      showNotes: true,
      showCrypto: true,
      showAll: false,
    },

    bookmarks: [],
    colors: {
      fontColor: '#ffffff',
      firstBgColor: '#e855e9',
      secondBgColor: '#7e89c1',
      thirdBgColor: '#00d4ff',
    },
  };

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  // Function for control the changing navigation window

  const toggleNav = () => dispatch({ type: TOGGLE_NAV });

  const toggleDefault = () => dispatch({ type: TOGGLE_DEFAULT });

  const toggleOptions = () => dispatch({ type: TOGGLE_OPTIONS });

  const toggleColors = () => dispatch({ type: TOGGLE_COLORS });

  const toggleBookmarks = () => dispatch({ type: TOGGLE_BOOKMARKS });

  const toggleAbout = () => dispatch({ type: TOGGLE_ABOUT });

  const toggleAll = () => dispatch({ type: TOGGLE_ALL });

  // Widgets visibility functions

  const getWidgets = () => dispatch({ type: GET_WIDGETS });

  const toggleTasks = () => dispatch({ type: TOGGLE_TASKS });

  const toggleTvShows = () => dispatch({ type: TOGGLE_TVSHOWS });

  const toggleSites = () => dispatch({ type: TOGGLE_SITES });

  const toggleNotes = () => dispatch({ type: TOGGLE_NOTES });

  const toggleCrypto = () => dispatch({ type: TOGGLE_CRYPTO });

  // Bookmarks

  const getBookmarks = () => dispatch({ type: GET_BOOKMARKS });

  const addBookmark = (url, name) => {
    let domain = new URL(url);
    domain = domain.hostname;
    console.log(domain);
    dispatch({
      type: ADD_BOOKMARK,
      payload: {
        id: uuidv4(),
        name,
        url: `https://${domain}`,
        icon: `https://${domain}/favicon.ico`,
      },
    });
  };

  const removeBookmark = (id) => dispatch({ type: REMOVE_BOOKMARK, payload: id });

  // Colors

  const toggleColor = (value, name) => {
    switch (name) {
      case 'fontColor':
        console.log('A');
        document.body.style.color = value;
        break;
      case 'firstBgColor':
        document.body.style.background = `linear-gradient(45deg, ${state.colors.firstBgColor}, ${state.colors.secondBgColor}, ${state.colors.thirdBgColor})`;
        break;
      default:
        break;
    }

    dispatch({ type: TOGGLE_COLOR, payload: { value, name } });
  };

  return (
    <NavigationContext.Provider
      value={{
        showNav: state.showNav,
        navDisplays: state.navDisplays,
        widgetsDisplays: state.widgetsDisplays,
        bookmarks: state.bookmarks,
        colors: state.colors,
        getWidgets,
        toggleNav,
        toggleOptions,
        toggleDefault,
        toggleColors,
        toggleBookmarks,
        toggleAbout,
        toggleTasks,
        toggleTvShows,
        toggleSites,
        toggleCrypto,
        toggleNotes,
        getBookmarks,
        addBookmark,
        removeBookmark,
        toggleAll,
        toggleColor,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
