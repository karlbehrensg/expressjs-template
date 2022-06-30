const express = require("express");
const router = express.Router();

const authorsRoutes = require("./authorsRoutes");
const booksRoutes = require("./booksRoutes");

router.use("/authors", authorsRoutes);
router.use("/books", booksRoutes);

module.exports = router;
