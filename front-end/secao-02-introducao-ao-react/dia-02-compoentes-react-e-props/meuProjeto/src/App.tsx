import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';

const book1 = {
  title: "The Enchanted Forest",
  pages: 320,
  isRead: true,
  isFavorite: true
};

const book2 = {
  title: "Secrets of the Starlight",
  pages: 240,
  isRead: false,
  isFavorite: false
};

const book3 = {
  title: "Mysteries of the Moon",
  pages: 180,
  isRead: true,
  isFavorite: true
};

function App() {
  return (
    <>
      <div>
        <Header />
       <p>Meus livros:</p>
       <ul>
        <li>✅ ⏳ Nome (X páginas) 🤩</li>
        <Book
        book={ book3 }
        />
       </ul>
       <Footer />
      </div>
    </>
  )
}

export default App
