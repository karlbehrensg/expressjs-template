const express = require("express");
const router = express.Router();

const {
  retriveBooks,
  retriveBook,
  createBook,
  updateBook,
  deleteBook,
} = require("src/controllers/books");

router.get("", retriveBooks);
router.get("/:id", retriveBook);
router.post("", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
