var db = require("../models");

module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/api/salesHistory", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.salesHistory.findAll({}).then(function(ForecastToolDB) {
      // We have access to the todos as an argument inside of the callback function
      res.json(ForecastToolDB);
    });
  });
};
