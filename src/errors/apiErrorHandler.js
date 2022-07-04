const ApiError = require("src/errors/ApiError");

const apiErrorHanlder = (err, req, res, next) => {
  if (process.env.NODE_ENV !== "production") {
    console.log(err);
  }

  if (err instanceof ApiError) {
    return res.status(err.code).json(err.message);
  }

  return res.status(500).json("Algo malo paso con el servidor");
};

module.exports = apiErrorHanlder;
