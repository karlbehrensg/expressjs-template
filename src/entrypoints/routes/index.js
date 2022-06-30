const express = require("express");
const router = express.Router();

const authorsRouter = require("./authorsRouter");
const booksRouter = require("./booksRouter");

router.use("/authors", authorsRouter);
router.use("/books", booksRouter);

module.exports = router;
