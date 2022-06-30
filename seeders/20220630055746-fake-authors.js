"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("authors", [
      {
        firstName: "Karl",
        lastName: "Behrens",
        email: "karlbehrens@test.com",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
      {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@test.com",
        createdAt: Sequelize.fn("NOW"),
        updatedAt: Sequelize.fn("NOW"),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("authors", null, {});
  },
};
