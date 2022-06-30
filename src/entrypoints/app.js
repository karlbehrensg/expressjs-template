const express = require("express");

const routes = require("src/entrypoints/routes");
const { apiErrorHandler } = require("src/utils/errors");

const createApp = () => {
  const app = express();
  app.use(express.json());
  app.use(apiErrorHandler);
  app.use(routes);
  return app;
};

module.exports = createApp();
