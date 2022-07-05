const { Book } = require("src/models");

const createBook = async (req, res) => {
  const { title } = req.body;
  const bookCreated = await Book.create({ title });
  res.send(bookCreated);
};

module.exports = createBook;
