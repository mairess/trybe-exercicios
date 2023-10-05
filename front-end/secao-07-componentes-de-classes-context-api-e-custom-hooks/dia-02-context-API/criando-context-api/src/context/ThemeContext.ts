import { createContext } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light',
  toggleTheme: () => void,
};

const ThemeContext = createContext({} as ThemeContextType);

export default ThemeContext;
