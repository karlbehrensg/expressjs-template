const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  // Check if a query value come into url: baseurl/books?custom_query=my_custom_query_value
  if (req.query.custom_query) {
    res.send(`Get book with custom_query: ${req.query.custom_query}`);
  } else {
    res.send("Get all books");
  }
});

router.get("/:my_param", (req, res) => {
  // Get my_param value in url: baseurl/books/my_custom_param_value
  res.send(`Get book with url param: ${req.params.my_param}`);
});

router.post("", (req, res) => {
  res.send("Create new book");
});

router.put("/:id", (req, res) => {
  res.send(`Books with id ${req.params.id} updated`);
});

router.delete("/:id", (req, res) => {
  res.send(`Books with id ${req.params.id} deleted`);
});

module.exports = router;
