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
} from '../types';

const NavigationState = (props) => {
  const initialState = {
    showNav: false,
    showDefault: true,
    showOptions: false,
    showColors: false,
    showBookmarks: false,
    showAdd: false,
  };

  const toggleNav = () => {
    dispatch({
      type: TOGGLE_NAV,
    });
  };

  const toggleDefault = () => dispatch({ type: TOGGLE_DEFAULT });

  const toggleOptions = () => dispatch({ type: TOGGLE_OPTIONS });

  const toggleColors = () => dispatch({ type: TOGGLE_COLORS });

  const toggleBookmarks = () => dispatch({ type: TOGGLE_BOOKMARKS });

  const toggleAdd = () => dispatch({ type: TOGGLE_ADD });

  const [state, dispatch] = useReducer(NavigationReducer, initialState);

  return (
    <NavigationContext.Provider
      value={{
        showNav: state.showNav,
        showDefault: state.showDefault,
        showOptions: state.showOptions,
        showColors: state.showColors,
        showBookmarks: state.showBookmarks,
        showAdd: state.showAdd,
        toggleNav,
        toggleOptions,
        toggleDefault,
        toggleColors,
        toggleBookmarks,
        toggleAdd,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
};

export default NavigationState;
