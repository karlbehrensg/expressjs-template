const express = require("express");

const router = require("src/entrypoints/routes");

const createApp = () => {
  const app = express();

  app.use(router);

  return app;
};

module.exports = createApp();
