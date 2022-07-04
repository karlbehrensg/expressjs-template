const deleteBook = async (req, res) => {
  res.send(`Libro con id ${req.params.id} fue eliminado`);
};

module.exports = deleteBook;
