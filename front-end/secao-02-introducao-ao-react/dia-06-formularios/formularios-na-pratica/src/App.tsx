import './App.css';
import { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';
// import { booksList, bestMovie } from './data';
import { BookType } from './type';
import Form from './components/form/Form';

// import * as bookData from './data';

function App() {
  // const [bookTitle, setBookTitle] = useState('');
  // const [bookPages, setBookPages] = useState(0);
  // const [bookAuthor, setBookAuthor] = useState('');
  const [books, setBooks] = useState<BookType[]>([]);
  // function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookTitle(event.target.value);
  // }

  // function handleAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookAuthor(event.target.value);
  // }

  // function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookPages(event.target.valueAsNumber);
  // }

  const updateState = (title: string, author: string, pages: number) => {
    const newBook = {
      title,
      author,
      pages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
  };

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          <p>
            <s>Livros emprestados </s>
            Meus livros:
          </p>
        </Title>
        <ul className="books-list">
          {books.map((book) => (
            <Book key={ book.title } book={ book } />
          ))}
          {/* {bookData.booksList.map((book) => (
              <Book key={book.title} book={book} />
            ))} */}

          <Form submitFunction={ updateState } />
        </ul>
        {/* <Title>{bestMovie}</Title> */}
        {/* <Title>{bookData.bestMovie}</Title> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
