const { DataTypes } = require("sequelize");

const { conn } = require("src/adapters");

const Author = conn.define(
  "Author",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "authors",
  }
);

module.exports = Author;
