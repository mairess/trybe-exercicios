import './App.css'
import Header from './components/header/';
import Footer from './components/footer/';
import Book from './components/book/';
import Title from './components/title/';
import { booksList, bestMovie } from './data';
import { useState } from 'react';
// import * as bookData from './data';

function App() {

const [bookTitle, setBookTitle] = useState("");
const [bookPages, setBookPages] = useState(0);
const [bookAuthor, setBookAuthor] = useState("");
const [books, setBooks] = useState(booksList);

function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  setBookTitle(event.target.value);
  }

function handleAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
  setBookAuthor(event.target.value);
}

function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
  setBookPages(event.target.valueAsNumber);
  }

function handleAddClick() {
  const newBook = {
    title: bookTitle,
    author: bookAuthor,
    pages: bookPages,
    isRead: false,
    isFavorite: false,
  }

  setBooks([...books, newBook]);

  }

  return (
    <>
      <div className='app'>
        <Header />
        <div className="container">
          <Title>
            <p>
              <s>Livros emprestados </s>
              Meus livros:
            </p>
          </Title>
          <ul className='books-list'>
            {books.map((book) => (
              <Book key={book.title} book={book} />
            ))}
            {/* {bookData.booksList.map((book) => (
              <Book key={book.title} book={book} />
            ))} */}
          </ul>
          <Title>{bestMovie}</Title>
          {/* <Title>{bookData.bestMovie}</Title> */}

          <div className='images-container'>
            <input onChange={handleNameChange} id="title" type="text" value={bookTitle} placeholder="Título" />
            <input onChange={handleAuthorChange} id="author" type="text" value={bookAuthor} placeholder="Autor" />
            <input onChange={handlePagesChange} id="paginas" type="number" value={bookPages} placeholder="Quantidade de páginas" />
            <button onClick={handleAddClick}>Adicionar</button>
          </div>

        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
