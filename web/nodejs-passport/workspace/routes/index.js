var express = require("express");
var router = express.Router();

// TODO: STEP2-01 login get 함수 등록
router.get("/login", function(req, res) {
  var user = req.user;
  console.log("login", req.user);
  res.render("login", {
    title: "Login to Tutorial Nodejs Passport",
    data: JSON.stringify({
      user: typeof user === "undefined" ? undefined : user
    })
  });
});

// TODO: STEP2-02 logout post 함수 작성
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

/* GET home page. */
router.get("/home", function(req, res) {
  var user = req.user;
  console.log("index", req.user);
  res.render("index", {
    title: "Tutorial Nodejs Passport",
    data: JSON.stringify({
      user: typeof user === "undefined" ? undefined : user
    })
  });
});

/* GET root page. */
router.get("/", function(req, res) {
  res.redirect("/home");
});

module.exports = router;
