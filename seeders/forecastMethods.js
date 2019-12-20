'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('forecastMethods', [
      {
        Method: "Regression",
        MethodDescription: "Regression Analysis",
        Formula: "",
        ForecastToActual: "Even split"
      },
      {
        Method: "Weighted Average",
        MethodDescription: "Averages the past three periods providing more weight to the more recent period.",
        Formula: "((CPm1*3)+(CPm2*2)+(CPm3*1))/6)",
        ForecastToActual: "Even split"
      }
    ], {});
    },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('forecastMethods', null, {});
  }
};