import { BookType } from '../../type';
import './book.css';

type BookProps = {
  book: BookType;
};

function Book({ book }: BookProps) {
  const favoriteClass = book.isFavorite ? 'favorite-book' : '';
  return (
    <li className={ `book-item ${favoriteClass}` }>
      <span>{book.isRead ? '✅ ' : '⏳ '}</span>
      <span>{`${book.title} (${book.pages} páginas) -${book.author}-`}</span>
      {book.isFavorite && <span>🤩</span>}
    </li>
  );
}

export default Book;
