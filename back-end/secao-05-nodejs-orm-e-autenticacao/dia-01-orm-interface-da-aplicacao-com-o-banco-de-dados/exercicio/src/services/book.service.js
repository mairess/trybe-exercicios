const { Book } = require("../models");

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const getByAuthor = async (author) => {
  const book = await Book.findAll({ 
    where: { author },
    order: [['title', 'ASC']],
  });

  return book;
};

const createBook = async ({title, author, pageQuantity, publisher}) => {
  const newBook = await Book.create({ title, author, pageQuantity, publisher });

  return newBook;
};

const updateBook = async (id, { title, author, pageQuantity, publisher }) => {
  const [updatedBook] = await Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } },
  );

  console.log(updatedBook);
  return updatedBook;
};

const deleteBook = async (id) => {
  const book = await Book.destroy(
    { where: { id } },
  );

  console.log(book);
  return book;
};


module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
};
