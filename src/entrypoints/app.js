const express = require("express");

const createApp = () => {
  const app = express();

  app.get("/", (req, res) => {
    res.send("welcome to backend server");
  });

  return app;
};

module.exports = createApp();
