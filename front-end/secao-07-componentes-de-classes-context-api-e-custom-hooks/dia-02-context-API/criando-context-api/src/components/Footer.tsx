import '../style.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

export default function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <footer>
      Tema atual:
      {' '}
      {theme}
    </footer>
  );
}
