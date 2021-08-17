import React, { useReducer } from 'react';

import { ThemeProvider } from 'styled-components';

// Custom hooks
import useVideos from '../../hooks/useVideos';

// Components
import Home from '../../pages/Home/Home';
import Header from '../Header';

// Context
import GlobalContext from '../../store/GlobalContext/GlobalContext';
import {
  initialState,
  globalContextReducer,
} from '../../store/GlobalContext/GlobalContexReducer';

// Helpers
import { LS_KEYS } from '../../store/GlobalContext/constants';
import { darkTheme, lightTheme } from '../../theme';

function App() {
  const [state, dispatch] = useReducer(globalContextReducer, initialState);
  const { videos, search } = useVideos('wizeline');

  const appTheme = JSON.parse(localStorage.getItem(LS_KEYS.APP_THEME));
  let currentTheme = lightTheme;
  if (appTheme) {
    currentTheme = appTheme.isDarkMode ? darkTheme : lightTheme;
  }

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <Header search={search} />
        <Home videos={videos} />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
