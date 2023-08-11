import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';

const book1 = {
  title: "The Enchanted Forest",
  author: "Alice Writer",
  pages: 320,
  isRead: true,
  isFavorite: false
};

const book2 = {
  title: "Secrets of the Starlight",
  author: "Bob Authorson",
  pages: 240,
  isRead: false,
  isFavorite: false
};

const book3 = {
  title: "Mysteries of the Moonshadow",
  author: "Charlie Novelist",
  pages: 320,
  isRead: true,
  isFavorite: true
};

const book4 = {
  title: "Enigma of the Emerald Isle",
  author: "David Wordsmith",
  pages: 180,
  isRead: false,
  isFavorite: false
};

const book5 = {
  title: "Whispers in the Wind",
  author: "Eve Storyteller",
  pages: 200,
  isRead: true,
  isFavorite: false
};

const book6 = {
  title: "Chronicles of the Cosmos",
  author: "Frank Narrator",
  pages: 400,
  isRead: false,
  isFavorite: false
};

const book7 = {
  title: "Legends of Luminaria",
  author: "Grace Wordsworth",
  pages: 280,
  isRead: true,
  isFavorite: true
};

const book8 = {
  title: "Quest for the Quill",
  author: "Henry Scribbler",
  pages: 150,
  isRead: false,
  isFavorite: false
};

const book9 = {
  title: "Sagas of the Sunchasers",
  author: "Isabel Penman",
  pages: 260,
  isRead: false,
  isFavorite: false
};

const book10 = {
  title: "Echoes from Eternity",
  author: "Jack Lyricist",
  pages: 310,
  isRead: false,
  isFavorite: false
};

const book11 = {
  title: "Tales of the Twilight Realm",
  author: "Kate Scribe",
  pages: 230,
  isRead: false,
  isFavorite: false
};

const book12 = {
  title: "Riddles of the Radiant Orb",
  author: "Leo Mythos",
  pages: 190,
  isRead: false,
  isFavorite: false
};



function App() {
  return (
    <>
      <div>
        <Header />
        <p>Meus livros:</p>
        <ul>
          <Book book={book1} />
          <Book book={book2} />
          <Book book={book3} />
          <Book book={book4} />
          <Book book={book5} />
          <Book book={book6} />
          <Book book={book7} />
          <Book book={book8} />
          <Book book={book9} />
          <Book book={book10} />
          <Book book={book11} />
          <Book book={book12} />
        </ul>
        <Footer />
      </div>
    </>
  )
}

export default App
