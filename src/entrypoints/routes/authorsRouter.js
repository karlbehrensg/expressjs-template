const express = require("express");
const router = express.Router();

const {
  getAuthorController,
  getAuthorsController,
  createAuthorController,
} = require("src/controllers/authors");

router.get("", (req, res) => getAuthorsController(req, res));
router.get("/:my_param", (req, res) => getAuthorController(req, res));
router.post("", (req, res) => createAuthorController(req, res));

router.put("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} deleted`);
});

module.exports = router;
