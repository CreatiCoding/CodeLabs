var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  var user = {
    id: "hello",
    name: "tester",
    email: "test@test.com"
  };
  var user2 = undefined;
  res.render("index", {
    title: "Tutorial Nodejs Passport",
    data: JSON.stringify({
      user: typeof user === "undefined" ? undefined : user
    })
  });
});

/* GET login page. */
router.get("/login", function(req, res, next) {
  res.render("login", {
    title: "Login to Tutorial Nodejs Passport"
  });
});

module.exports = router;
