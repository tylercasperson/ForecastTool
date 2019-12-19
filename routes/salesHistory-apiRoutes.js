var db = require("../models");

module.exports = function(app) {
  app.get("/api/salesHistory", function(req, res) {
    db.salesHistory.findAll({include: [db.category, db.numberType]}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });

  app.get("/api/salesHistory/categoryYear", function(req, res) {
    db.salesHistory.findAll({attributes: ['categoryYear'], group: ['categoryYear']}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });

};
