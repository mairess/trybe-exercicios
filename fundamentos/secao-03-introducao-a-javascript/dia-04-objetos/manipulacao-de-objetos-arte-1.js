const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

  let readerName = reader.name;
  let readerLastName = reader.lastName;
  let readerFavBooksTitle = reader.favoriteBooks[0].title;

  console.log(`O livro favorito de ${readerName} ${readerLastName} se chama '${readerFavBooksTitle}'`);

  const addNewBook = (object, key, value) => {
    if (typeof object[key].title === 'undefined') {
        object[key].title = value;
    }
  };

  addNewBook(reader, 'favoriteBooks', {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  });

  let bookQuantity = 0;
  let message = '';

   if (reader.favoriteBooks.length == 0) {
    bookQuantity = 1;
    message = `'${readerName} tem ${bookQuantity} livro favorito'`;
  } else if (reader.favoriteBooks.length >= 1) {
    bookQuantity = reader.favoriteBooks.length + 1;
    message = `'${readerName} tem ${bookQuantity} livros favoritos'`;
  }

  console.log(message);

