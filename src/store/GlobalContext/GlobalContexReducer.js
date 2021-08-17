import { ACTIONS } from './constants';

export const initialState = {
  isDarkMode: false,
  searchTerm: '',
};

export const globalContextReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_IS_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload,
      };

    case ACTIONS.SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};
