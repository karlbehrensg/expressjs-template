const { Author } = require("src/domain/models");

const createAuthorController = async (req, res) => {
  const body = await req.body;
  return res.send("Create new author");
};

module.exports = createAuthorController;
