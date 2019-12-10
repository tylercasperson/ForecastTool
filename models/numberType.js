// Create Data Type table
module.exports = function(sequelize, DataTypes) {
    var numberType = sequelize.define("numberType", {
      DataDescription: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    numberType.associate = function(models) {
      numberType.hasMany(models.salesHistory, { as: "NumberType" });
    };
    return numberType;
  };
  