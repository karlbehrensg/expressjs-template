const { Book } = require("src/models");

const createBook = async (req, res) => {
  const { title } = req.body;
  const bookCreated = await Book.create({ title });
  res.status(201).send(bookCreated);
};

module.exports = createBook;
