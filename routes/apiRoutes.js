var db = require("../models");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const uuidv1 = require("uuid/v1");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  //Create a new User
  app.post("/api/users", function(req, res) {
    // console.log(req.body)
    db.User.create(req.body).then(function(dbUser) {
      const msg = {
        to: dbUser.email,
        from: "twood06@gmail.com",
        subject: "THIS IS SO MUCH FUN!",
        text: "ANYTHING YOU CAN DO I CAN DO BETTER!",
        html: "<strong>I AM BETTER</strong>"
      };
      sgMail.send(msg);
      res.json(dbUser);
    });
  });

  app.post("/api/users/login", function(req, res) {
    db.User.findAll({
      where: {
        user_id: req.body.user_id,
        user_password: req.body.user_password
      }
    }).then(function(dbUser) {
      var uuid = uuidv1();
      console.log(dbUser);
      if (!dbUser.length) {
        res.send({ error: "This is not a valid user." });
      } else {
        res.send(uuid);
      }
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  //save favorited article
  app.post("/api/savedarticles", function(req, res) {
    db.Article.create(req.body).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });

  app.get("/api/savedarticles", function(req, res) {
    db.User.findAll({}).then(function(dbArticle) {
      res.json(dbArticle);
    });
  });
  // To query /v2/top-headlines
  // All options passed to topHeadlines are optional, but you need to include at least one of them
};
