const express = require("express");
const router = express.Router();

const { Author } = require("src/domain/models");
const { getAuthorsController } = require("src/controllers/authors");

router.get("", (req, res) => getAuthorsController(req, res));

router.get("/:my_param", async (req, res) => {
  // Get my_param value in url: baseurl/authors/my_custom_param_value
  const my_param = req.params.my_param;
  const author = await Author.findByPk(my_param);

  if (author === null) {
    return res
      .status(404)
      .send({ message: `Author with id ${my_param} not found` });
  }

  return res.send(author);
});

router.post("", (req, res) => {
  res.send("Create new author");
});

router.put("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`Author with id ${req.params.id} deleted`);
});

module.exports = router;
