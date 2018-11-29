var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// TODO: STEP1-01 의존 모듈 선언
var session = require("express-session");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var user = {
  id: "CreatiCoding",
  pw: "p@ssw0rd!@#$",
  name: "creco"
};

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// TODO: STEP1-02 express session 설정
app.use(
  session({
    secret: "session secret key",
    resave: false,
    saveUninitialized: true
  })
);

// TODO: STEP1-03 passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// TODO: STEP1-04 passport 로그인 인증 과정
// prettier-ignore
passport.use(
  new LocalStrategy({ usernameField: "id", passwordField: "pw" }, function(id, pw, done){
    if (id === user.id) {
      if (pw === user.pw) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Incorrect password."
        });
      }
    } else {
      return done(null, false, {
        message: "Incorrect username."
      });
    }
  })
);

// TODO: STEP1-05 passport serialize and deserialize
// serialize   from LocalStrategy to session each login request
// deserialize from session       to request each any request
passport.serializeUser(function(user, done) {
  done(null, {
    id: user.id,
    name: user.name
  });
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// TODO: STEP1-06 login post 함수를 passport를 이용하여 등록
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
  })
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
