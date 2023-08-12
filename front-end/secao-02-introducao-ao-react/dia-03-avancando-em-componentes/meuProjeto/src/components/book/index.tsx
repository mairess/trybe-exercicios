import './book.css';

type BookProps = {
  book: {
    title: string;
    author: string;
    pages: number;
    isRead: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  const favoriteClass = book.isFavorite ? 'favorite-book' : '';
  return (
    <li className={`book-item ${favoriteClass}`}>
      <span>{book.isRead ? '✅ ' : '⏳ '}</span>
      <span>{`${book.title} (${book.pages} páginas) -${book.author}-`}</span>
      {book.isFavorite && <span>🤩</span>}
    </li>
  );
}

export default Book;
