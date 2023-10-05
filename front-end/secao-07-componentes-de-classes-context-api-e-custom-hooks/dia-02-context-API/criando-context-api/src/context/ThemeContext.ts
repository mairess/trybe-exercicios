import { createContext } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light'
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
