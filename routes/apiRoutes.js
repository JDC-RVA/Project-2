var db = require("../models");


module.exports = function (app) {
  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (users) {
      res.json(users);
    });
  });

  //Create a new User
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (createUser) {
      res.json(createUser);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them

};
