var db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("f040e9c3149442ae93a7d68d6e99271b");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    newsapi.v2
      .topHeadlines({
        // sources: "bbc-news,the-verge",
        q: "",
        category: "business",
        // language: "en"
        country: "us"
      })
      .then(response => {
        // console.log(response);
        res.render("index", {
          newsArticles: response.articles
        });
      });
  });

  // Load example page and pass in an example by id
  app.get("/:search", function(req, res) {
    console.log(Date.now());
    newsapi.v2
      .everything({
        q: req.params.search,
        // category: "",
        from: "2019-12-01",
        to: "2017-12-12",
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
