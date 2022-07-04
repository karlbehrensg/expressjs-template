const express = require("express");
const PORT = process.env.PORT || 3000;

// const { apiErrorHandler } = require("src/errors");
const router = require("src/routes");

const app = express();

// app.use(apiErrorHandler);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening in port ${PORT}`);
});
