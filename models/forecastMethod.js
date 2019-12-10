// Create Regression table
module.exports = function(sequelize, DataTypes) {
    var forecastMethod = sequelize.define("forecastMethod", {
      Method: {
        type: DataTypes.STRING,
        allowNull: false
      },
      MethodDescription: DataTypes.STRING,
      Formula: DataTypes.STRING,
      ForecastToActual: DataTypes.STRING
    });
    return forecastMethod;
  };
  