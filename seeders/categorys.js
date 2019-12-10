'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorys', [
      {
        MainCategory: "Spotify",
        SubCategory: "Rock",
        CategoryDescription: "Rock music on Spotify"
      },
      {
        MainCategory: "Spotify",
        SubCategory: "Classical",
        CategoryDescription: "Classical music on Spotify"
      },
      {
        MainCategory: "Computers",
        SubCategory: "Gaming Computers",
        CategoryDescription: "Gaming computers on Amazon"
      },
      {
        MainCategory: "Computers",
        SubCategory: "Gaming Computers",
        CategoryDescription: "Gaming computers on Amazon"
      },
      {
        MainCategory: "Computers",
        SubCategory: "Laptops",
        CategoryDescription: "Laptops being sold on Amazon"
      }
      ], {});
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorys', null, {});
  }
};
