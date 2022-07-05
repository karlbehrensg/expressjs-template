const { ApiError } = require("src/errors");

const retriveBook = async (req, res, next) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    next(
      ApiError.badRequest(
        `El id debe ser numerico, pero se envio ${req.params.id}`
      )
    );
    return;
  }
  res.send(`Obtener libro con paramtro: ${id}`);
};

module.exports = retriveBook;
