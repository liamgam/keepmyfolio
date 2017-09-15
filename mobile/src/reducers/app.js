// @flow

import type { AppState, Action } from '../types';

import { themes } from '../utils/constants';

const initialState: AppState = {
  darkTheme: true,
  theme: themes.dark
};

export default function appReducer(
  state: AppState = initialState,
  action: Action,
) {
  switch (action.type) {
    case 'app/TOGGLE_THEME':
      return {
        ...state,
        darkTheme: !state.darkTheme,
        theme: themes[state.darkTheme ? 'light' : 'dark']
      };
    default:
      return state;
  }
}
