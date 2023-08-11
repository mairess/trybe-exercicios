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
  return (
    <li>
      <span>{book.isRead ? '✅ ' : '⏳ '}</span>
      <span>{`${book.title} (${book.pages} páginas) -${book.author}-`}</span>
      {book.isFavorite && <span>🤩</span>}
    </li>
  );
}

export default Book;
