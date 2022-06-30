const { Author } = require("src/domain/models");

const getAuthorsController = async (req, res) => {
  // Check if a query value come into url: baseurl/authors?custom_query=my_custom_query_value
  if (req.query.custom_query) {
    const custom_query = req.query.custom_query;
    const author = await Author.findByPk(custom_query);

    if (author === null) {
      return res
        .status(404)
        .send({ message: `Author with id ${custom_query} not found` });
    }

    return res.send(author);
  }
  const authors = await Author.findAll();
  res.send(authors);
};

module.exports = getAuthorsController;
