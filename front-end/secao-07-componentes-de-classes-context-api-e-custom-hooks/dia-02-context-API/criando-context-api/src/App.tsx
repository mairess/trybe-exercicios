import { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

export default function App() {
  const [pageThem, setPageTheme] = useState<'dark' | 'light'>('dark');

  function toggleTheme() {
    setPageTheme((prevPageThem) => (prevPageThem === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ThemeContext.Provider value={ { theme: pageThem, toggleTheme } }>
      <div className="app">
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
