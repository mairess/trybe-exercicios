const BookService = require("../services/book.service");

const error500Message = "Algo deu errado";

const getAll = async (_req, res) => {
  try {
    const { author } = req.query;
    let books;
    if (author) {
      books = await BookService.getByAuthor(author);
    } else {
      books = await BookService.getAll();
    }
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    if (!book) return res.status(404).json({ message: "Book not found" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};


const getByAuthor = async (req, res) => {
  try {
    const { author } = req.query;
    const bookAuthor = await BookService.getByAuthor(author);

    if (!bookAuthor) return res.status(404).json({ message: "Author not found" });

    return res.status(200).json(bookAuthor);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await BookService.createBook({ title, author, pageQuantity, publisher });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateBook(id, {
      title,
      author,
      pageQuantity,
      publisher,
    });

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    return res.status(200).json({ message: "Book updated!" });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const removed = await BookService.deleteBook(id);

    if (!removed) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json({ message: 'Book removed' });

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
  getByAuthor,
};
