import { createContext } from "react";

type ThemeContext = {
    theme: 'dark' | 'light'
};

const ThemeContext = createContext({} as ThemeContext);

export default ThemeContext;