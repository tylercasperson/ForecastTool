'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('numberTypes', [{
        DataDescription: "Revenue"
      },
      {
        DataDescription: "Expense"
      }
    ], {});
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('numberTypes', null, {});
  }
};
