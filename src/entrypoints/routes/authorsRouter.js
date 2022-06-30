const express = require("express");
const router = express.Router();

const {
  getAuthorController,
  getAuthorsController,
  createAuthorController,
} = require("src/controllers/authors");

router.get("", getAuthorsController);
router.get("/:my_param", getAuthorController);
router.post("", createAuthorController);

router.put("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} deleted`);
});

module.exports = router;
