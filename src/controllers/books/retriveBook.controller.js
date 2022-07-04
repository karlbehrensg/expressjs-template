const retriveBook = async (req, res) => {
  res.send(`Obtener libro con paramtro: ${req.params.id}`);
};

module.exports = retriveBook;
