const { Book } = require('./models');

(async () => {
  const books = await Book.findAll();
  console.log(books);
})();