const { DataTypes } = require("sequelize");

const { conn } = require("src/adapters");

const Book = conn.define(
  "Book",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "books",
  }
);

module.exports = Book;
