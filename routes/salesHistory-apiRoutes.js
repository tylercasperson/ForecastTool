var db = require("../models");

module.exports = function(app) {
  app.get("/api/SalesHistorys", function(req, res) {
    db.SalesHistory.findAll({}).then(function(RunFourDB) {
      res.json(RunFourDB);
    });
  });

  app.get("/api/SalesHistorys/:id", function(req, res) {
    db.SalesHistory.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(RunFourDB) {
      res.json(RunFourDB);
    });
  });

  app.post("/api/SalesHistorys", function(req, res) {
    console.log(req.body);
    db.SalesHistory.create(req.body).then(function(RunFourDB) {
      res.json(RunFourDB);
    });
  });

  app.delete("/api/SalesHistorys/:id", function(req, res) {
    db.SalesHistory.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(RunFourDB) {
      res.json(RunFourDB);
    });
  });
};
