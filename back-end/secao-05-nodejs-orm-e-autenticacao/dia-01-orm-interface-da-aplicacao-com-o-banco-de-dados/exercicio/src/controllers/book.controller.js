const BookService = require("../services/book.service");

const error500Message = "Algo deu errado";

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
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

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createUser(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const updatedBook = await BookService.updateUser(id, {
      title,
      author,
      pageQuantity,
    });

    if (!updatedBook)
      return res.status(404).json({ message: "Book not found" });

    return res.status(200).json({ message: "Book updated!" });
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
};
