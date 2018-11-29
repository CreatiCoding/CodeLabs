var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/home", function(req, res, next) {
  // temporary code
  var user = {
    id: "hello",
    name: "tester",
    email: "test@test.com"
  };
  res.render("index", {
    title: "Tutorial Nodejs Passport",
    data: JSON.stringify({
      user: typeof user === "undefined" ? undefined : user
    })
  });
});

/* GET root page. */
router.get("/", function(req, res, next) {
  res.redirect("/");
});

/* GET login page. */
router.get("/login", function(req, res, next) {
  res.render("login", {
    title: "Login to Tutorial Nodejs Passport"
  });
});

module.exports = router;
