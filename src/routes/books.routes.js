const express = require("express");
const router = express.Router();

// const { validateSchema } = require("src/middlewares");
const { createBookSchema } = require("src/schemas");

const { ApiError } = require("src/errors");

const validateSchema = (schema) => {
  return async (req, res, next) => {
    try {
      const validatedBody = await schema.validate(req.body);
      req.body = validatedBody;
      next();
    } catch (err) {
      next(ApiError.badRequest(err));
    }
  };
};

module.exports = validateSchema;

const {
  retriveBooks,
  retriveBook,
  createBook,
  updateBook,
  deleteBook,
} = require("src/controllers/books");

router.get("", retriveBooks);
router.get("/:id", retriveBook);
router.post("", validateSchema(createBookSchema), createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
