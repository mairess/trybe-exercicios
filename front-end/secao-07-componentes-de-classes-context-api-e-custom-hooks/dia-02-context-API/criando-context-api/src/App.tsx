import ThemeContext from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from './components/Image';
import './App.css';

export default function App() {
  return (
    <ThemeContext.Provider value={ { theme: 'dark' } }>
      <div className="app">
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
