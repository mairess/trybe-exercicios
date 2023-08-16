import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';
// import { booksList, bestMovie } from './data';
import { BookType } from './type';
import Button from './components/botao/Botao';
// import * as bookData from './data';

function App() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0);
  const [bookAuthor, setBookAuthor] = useState('');
  const [books, setBooks] = useState<BookType[]>([]);
  const [showFormMessage, setShowFormMessage] = useState(false);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handleAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookAuthor(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber);
  }

  function updateState() {
    const newBook = {
      title: bookTitle,
      author: bookAuthor,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
  }

  function resetForm() {
    setBookTitle('');
    setBookAuthor('');
    setBookPages(0);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (bookTitle !== '' && bookAuthor !== '' && bookPages > 0) {
      updateState();
      resetForm();
      setShowFormMessage(false);
    } else {
      setShowFormMessage(true);
    }
  }

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
        </ul>
        {/* <Title>{bestMovie}</Title> */}
        {/* <Title>{bookData.bestMovie}</Title> */}

        <form
          action=""
          className="books-form"
          onSubmit={ handleSubmit }
        >

          <input
            onChange={ handleNameChange }
            id="title"
            type="text"
            value={ bookTitle }
            placeholder="Título"
          />
          <input
            onChange={ handleAuthorChange }
            id="author"
            type="text"
            value={ bookAuthor }
            placeholder="Autor"
          />
          <input
            onChange={ handlePagesChange }
            id="paginas"
            type="number"
            value={ bookPages }
            placeholder="Quantidade de páginas"
          />
          {showFormMessage && (
            <div>
              <p className="alert">É preciso preencher os todos os campos</p>
            </div>
          )}
          <Button>
            Adicionar
          </Button>
        </form>

      </div>
      <Footer />
    </div>
  );
}

export default App;
