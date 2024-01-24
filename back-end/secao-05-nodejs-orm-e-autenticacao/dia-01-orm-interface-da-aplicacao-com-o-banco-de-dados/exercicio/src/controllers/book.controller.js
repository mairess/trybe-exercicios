const BookService = require("../services/book.service");

const error500Message = "Algo deu errado";

const getAll = async (_req, res) => {
  try {
    const users = await BookService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
};
