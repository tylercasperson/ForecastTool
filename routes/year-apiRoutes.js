var db = require("../models");

module.exports = function(app) {
  app.get("/api/salesHistory", function(req, res) {
    db.salesHistory.findall({
      group: ['categoryYear']
    }).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });
};
