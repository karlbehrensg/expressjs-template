const express = require("express");

const routes = require("src/entrypoints/routes");

const createApp = () => {
  const app = express();

  app.use(routes);

  return app;
};

module.exports = createApp();
