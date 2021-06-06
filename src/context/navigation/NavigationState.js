import React, { useReducer } from 'react';
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
  };

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  // Function for control the changing navigation window
  const toggleNav = () => dispatch({ type: TOGGLE_NAV });

  const toggleDefault = () => dispatch({ type: TOGGLE_DEFAULT });

  const toggleOptions = () => dispatch({ type: TOGGLE_OPTIONS });

  const toggleColors = () => dispatch({ type: TOGGLE_COLORS });

  const toggleBookmarks = () => dispatch({ type: TOGGLE_BOOKMARKS });

  const toggleAdd = () => dispatch({ type: TOGGLE_ADD });

  // Functionality visibility functions

  const toggleTasks = () => dispatch({ type: TOGGLE_TASKS });

  const toggleTvShows = () => dispatch({ type: TOGGLE_TVSHOWS });

  const toggleSites = () => dispatch({ type: TOGGLE_SITES });

  const toggleNotes = () => dispatch({ type: TOGGLE_NOTES });

  const toggleCrypto = () => dispatch({ type: TOGGLE_CRYPTO });

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
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
