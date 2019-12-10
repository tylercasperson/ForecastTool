// Create Sales History table
module.exports = function(sequelize, DataTypes) {
    var salesHistory = sequelize.define("salesHistory", {
      CategoryYear: DataTypes.INTEGER,
      SalesData: DataTypes.TEXT,
      ForecastData: DataTypes.TEXT,
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
      }
    });
    salesHistory.associate = function(models) {
      salesHistory.belongsTo(models.category);
      salesHistory.belongsTo(models.numberType);
    };
    return salesHistory;
  };
  