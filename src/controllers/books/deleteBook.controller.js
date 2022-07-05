const { ApiError } = require("src/errors");
const { Book } = require("src/models");

const deleteBook = async (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    next(ApiError.badRequest("id debe ser numerico"));
    return;
  }

  const book = await Book.findByPk(id);

  if (!book) {
    next(ApiError.notFound(`No se encontro el libro con el id: ${id}`));
    return;
  }

  book.destroy();

  res.send(`Libro con id ${id} fue eliminado`);
};

module.exports = deleteBook;
