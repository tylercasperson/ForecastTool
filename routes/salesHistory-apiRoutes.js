var db = require("../models");

module.exports = function(app) {
  app.get("/api/salesHistorys", function(req, res) {
    db.salesHistory.findAll({include: [db.category, db.numberType]}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });

  app.get("/api/salesHistorys/categoryYear", function(req, res) {
    db.salesHistory.findAll({attributes: ['categoryYear'], group: ['categoryYear']}).then(function(ForecastToolDB) {
      res.json(ForecastToolDB);
    });
  });

    app.post("/api/salesHistorys", function(req, res) {
      db.salesHistory.create(req.body).then(function(ForecastToolDB) {
        res.json(ForecastToolDB);
      });
    });

  // Delete an example by id
    app.delete("/api/salesHistorys/:id", function(req, res) {
      db.salesHistory.destroy({ where: { id: req.params.id } }).then(function(ForecastToolDB) {
        res.json(ForecastToolDB);
      });
    });
  

};
