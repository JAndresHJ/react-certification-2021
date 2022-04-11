import { createContext } from 'react';

const GlobalContext = createContext({
  isDarkMode: false,
  searchTerm: 'wizeline',
});

export default GlobalContext;
