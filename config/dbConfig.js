require("dotenv").config();

const dbConfig = () => {
  if (process.env.NODE_ENV === "test") {
    return {
      dialect: "sqlite",
      storage: "./test_db.sqlite",
    };
  }

  return {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  };
};

module.exports = dbConfig();
