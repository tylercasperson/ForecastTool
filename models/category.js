// Create GL setup table
module.exports = function(sequelize, DataTypes) {
    var category = sequelize.define("category", {
      MainCategory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      SubCategory: DataTypes.STRING,
      CategoryDescription: DataTypes.STRING
    });
    category.associate = function(models) {
      category.hasMany(models.salesHistory, { as: "Category" });
    };
    return category;
  };
  