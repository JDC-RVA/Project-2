var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("f040e9c3149442ae93a7d68d6e99271b");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    newsapi.v2
      .topHeadlines({
        // sources: "bbc-news,the-verge",
        q: "bitcoin",
        category: "business",
        language: "en"
        // country: "us"
      })
      .then(response => {
        // console.log(response);
        res.render("index", {
          newsArticles: response.articles
        });
      });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
