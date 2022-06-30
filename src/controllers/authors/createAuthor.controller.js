const { Author } = require("src/domain/models");

const createAuthorController = async (req, res) => {
  return res.send("Create new author");
};

module.exports = createAuthorController;
