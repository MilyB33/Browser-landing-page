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
} from '../types';

const NavigationState = (props) => {
  const initialState = {
    showNav: false,
    showDefault: true,
    showOptions: false,
    showColors: false,
    showBookmarks: false,
    showAdd: false,
    showTasks: true,
    showTvShows: true,
    showSites: true,
    showNotes: true,
    showCrypto: true,
    showAll: false,
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

  const toggleAdd = () => dispatch({ type: TOGGLE_ADD });

  const toggleAll = () => dispatch({ type: TOGGLE_ALL });

  // Functionality visibility functions

  const toggleTasks = () => dispatch({ type: TOGGLE_TASKS });

  const toggleTvShows = () => dispatch({ type: TOGGLE_TVSHOWS });

  const toggleSites = () => dispatch({ type: TOGGLE_SITES });

  const toggleNotes = () => dispatch({ type: TOGGLE_NOTES });

  const toggleCrypto = () => dispatch({ type: TOGGLE_CRYPTO });

  // Bookmarks

  const getBookmarks = () => dispatch({ type: GET_BOOKMARKS });

  const addBookmark = (url, name) => {
    dispatch({
      type: ADD_BOOKMARK,
      payload: {
        id: uuidv4(),
        name,
        url,
        icon: `${url}/favicon.ico`,
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
    }

    dispatch({ type: TOGGLE_COLOR, payload: { value, name } });
  };

  return (
    <NavigationContext.Provider
      value={{
        showNav: state.showNav,
        showDefault: state.showDefault,
        showOptions: state.showOptions,
        showColors: state.showColors,
        showBookmarks: state.showBookmarks,
        showAdd: state.showAdd,
        showTasks: state.showTasks,
        showTvShows: state.showTvShows,
        showSites: state.showSites,
        showNotes: state.showNotes,
        showCrypto: state.showCrypto,
        bookmarks: state.bookmarks,
        showAll: state.showAll,
        colors: state.colors,
        toggleNav,
        toggleOptions,
        toggleDefault,
        toggleColors,
        toggleBookmarks,
        toggleAdd,
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
