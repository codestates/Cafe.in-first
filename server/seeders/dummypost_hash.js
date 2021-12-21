//seeders/안에 파일.js
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("dummypost_hash", [
      {
        dummy_tag_id: 1,
        dummy_post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dummy_tag_id: 2,
        dummy_post_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dummy_tag_id: 4,
        dummy_post_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        dummy_tag_id: 3,
        dummy_post_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("dummypost_hash", null, {});
  },
};
