import { createContext } from 'react';

const GlobalContext = createContext({
  isDarkMode: false,
  searchTerm: '',
});

export default GlobalContext;
