var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/edit/:item/:gl", function(req, res) {
    var selectedItem = {
      gl: req.params.gl,
      item: req.params.item
    };

    res.render("edit",selectedItem);
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
