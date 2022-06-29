const app = require("src/entrypoints/app");

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log("server listening at 3000");
});

server.on("error", console.error);
