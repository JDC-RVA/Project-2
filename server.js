require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// var modals = require("./public/js/modals");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// // Connect to News API
// const NewsAPI = require("newsapi");
// const newsapi = new NewsAPI("f040e9c3149442ae93a7d68d6e99271b");
// // To query /v2/top-headlines
// // All options passed to topHeadlines are optional, but you need to include at least one of them
// newsapi.v2
//   .topHeadlines({
//     // sources: "bbc-news,the-verge",
//     q: "amazon",
//     category: "",
//     // language: "en"
//     country: "us"
//   })
//   .then(response => {
//     console.log(response);
//     /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
//   });

module.exports = app;
