var db = require("../models");

module.exports = function(app) {
  app.get("/api/category", function(req, res) {
    db.category.findAll({}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });
};
