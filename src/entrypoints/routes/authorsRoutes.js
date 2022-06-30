const express = require("express");
const router = express.Router();

const { Author } = require("src/domain/models");

router.get("", async (req, res) => {
  // Check if a query value come into url: baseurl/authors?custom_query=my_custom_query_value
  if (req.query.custom_query) {
    res.send(`Get authors with custom_query: ${req.query.custom_query}`);
  } else {
    const authors = await Author.findAll();
    res.send(authors);
  }
});

router.get("/:my_param", (req, res) => {
  // Get my_param value in url: baseurl/authors/my_custom_param_value
  res.send(`Get author with url param: ${req.params.my_param}`);
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
