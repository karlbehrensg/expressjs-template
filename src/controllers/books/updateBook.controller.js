const updateBook = async (req, res) => {
  res.send(`Libro con id ${req.params.id} fue actualizado`);
};

module.exports = updateBook;
