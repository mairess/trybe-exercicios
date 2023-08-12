import './App.css'
import Header from './components/header/';
import Footer from './components/footer/';
import Book from './components/book/';
import Title from './components/title/';
import { booksList, bestMovie } from './data';
// import * as bookData from './data';

function App() {
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
            {booksList.map((book) => (
              <Book key={book.title} book={book} />
            ))}
            {/* {bookData.booksList.map((book) => (
              <Book key={book.title} book={book} />
            ))} */}
          </ul>
          <Title>{bestMovie}</Title>
          {/* <Title>{bookData.bestMovie}</Title> */}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
