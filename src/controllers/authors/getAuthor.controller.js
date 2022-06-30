const { Author } = require("src/domain/models");

const getAuthorsController = async (req, res) => {
  // Get my_param value in url: baseurl/authors/my_custom_param_value
  const my_param = req.params.my_param;
  const author = await Author.findByPk(my_param);

  if (author === null) {
    return res
      .status(404)
      .send({ message: `Author with id ${my_param} not found` });
  }

  return res.send(author);
};

module.exports = getAuthorsController;
