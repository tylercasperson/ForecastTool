var db = require("../models");

module.exports = function(app) {
  app.get("/api/forecastMethod", function(req, res) {
    db.forecastMethod.findAll({}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });
};
