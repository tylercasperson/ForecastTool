var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/importCSV", function(req, res) {
    res.render("importCSV");
  });

  app.get("/editForecast", function(req, res) {
    res.render("editForecast");
  });

  app.get("/settings", function(req, res) {
    res.render("settings");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
