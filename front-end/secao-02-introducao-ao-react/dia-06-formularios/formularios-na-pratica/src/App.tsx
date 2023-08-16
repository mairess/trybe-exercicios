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
  const [formData, setFormData] = useState({ title: '', author: '', pages: 0 });

  // const [bookTitle, setBookTitle] = useState('');
  // const [bookPages, setBookPages] = useState(0);
  // const [bookAuthor, setBookAuthor] = useState('');
  const [books, setBooks] = useState<BookType[]>([]);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ));
  }

  // function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookTitle(event.target.value);
  // }

  // function handleAuthorChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookAuthor(event.target.value);
  // }

  // function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   setBookPages(event.target.valueAsNumber);
  // }

  function updateState() {
    const newBook = {
      title: formData.title,
      author: formData.author,
      pages: formData.pages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
  }

  function resetForm() {
    setFormData({ title: '', author: '', pages: 0 });
    // setBookTitle('');
    // setBookAuthor('');
    // setBookPages(0);
  }

  function isFormValid() {
    const erros = [];

    if (formData.title === '') {
      erros.push('O campo Título é orbigatório');
    }

    if (formData.author === '') {
      erros.push('O campo Autor não pode ser vazio');
    }

    if (formData.pages <= 0) {
      erros.push('O campo Páginas precisa ser mairo que zero');
    }

    setErrorMessages(erros);

    return erros.length === 0;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isFormValid()) {
      updateState();
      resetForm();
      setErrorMessages([]);
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
            onChange={ handleChange }
            id="title"
            name="title"
            type="text"
            value={ formData.title }
            placeholder="Título"
          />
          <input
            onChange={ handleChange }
            id="author"
            name="author"
            type="text"
            value={ formData.author }
            placeholder="Autor"
          />
          <input
            onChange={ handleChange }
            id="paginas"
            name="pages"
            type="number"
            value={ formData.pages }
            placeholder="Quantidade de páginas"
          />
          {errorMessages.length > 0 && (
            <div className="alert">
              {errorMessages.map((message, index) => (
                <p key={ index }>{ message }</p>
              ))}
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
