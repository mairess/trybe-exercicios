const { Book } = require("../models");

const getAll = async () => {
  const users = await Book.findAll();

  return users;
};

module.exports = {
  getAll,
};
