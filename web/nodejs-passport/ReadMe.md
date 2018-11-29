# Node.js Passport

---



## 0. 개요

Node.js 에서 이제는 표준이 되어버린 인증(회원 인증 및 권한 부여) 라이브러리인 Passport를 실습해보자.

이번 Passport 실습에서는 기본적으로 사용되는 아이디와 비밀번호를 통한 로그인을 실습할 예정이다.



## 1. 실습 환경

- Node.js v11.2.0

- npm 6.4.1

- need modules: yarn, nodemon, passport, passport-local, etc.

## 2. 실습

### Step 0. Workspace 준비

1. STEP0-01 workspace 다운로드

   ```bash
   cd ~
   git clone https://github.com/CreatiCoding/CodeLabs
   mv CodeLabs/web/nodejs-passport ./nodejs-passport
   rm -rf CodeLabs
   cd nodejs-passport/workspace
   ```

   ​	or

   ```bash
   wget -O - https://raw.githubusercontent.com/CreatiCoding/CodeLabs/master/web/nodejs-passport/download-workspace.sh | bash
   ```

2. STEP0-02 모듈 설치

   `nodejs-passport/workspace` 에서 작업

   ```bash
   yarn add
   ```

   or

   ```bash
   npm install
   ```

### Step 1. `app.js`에 passport 관한 설정하기

1. STEP1-01 의존 모듈 선언

   ```javascript
   var session = require("express-session");
   var passport = require("passport");
   var LocalStrategy = require("passport-local").Strategy;
   var user = {
     id: "사용자아이디",
     pw: "사용자비밀번호",
     name: "사용자이름"
   };
   ```

2. STEP1-02 express session 설정

   ```js
   app.use(session({
     secret: 'session secret key',
     resave: false,
     saveUninitialized: true
   }));
   ```

3. STEP1-03 passport 초기화

   ```javascript
   app.use(passport.initialize());
   app.use(passport.session());
   ```

4. STEP1-04 passport 로그인 인증 과정

   ```javascript
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
   ```

5. STEP1-05 passport serialize and deserialize

   ```javascript
   passport.serializeUser(function(user, done) {
     done(null, {
       id: user.id,
       name: user.name
     });
   });
   passport.deserializeUser(function(user, done) {
     done(null, user);
   });
   ```

6. STEP1-06 login post 함수를 passport를 이용하여 등록

   ```javascript
   app.post(
     "/login",
     passport.authenticate("local", {
       successRedirect: "/home",
       failureRedirect: "/login"
     })
   );
   ```

### Step 2. `routes/index.js` 의 router에서 passport 설정 추가

1. STEP2-01 login get 함수 등록

   ```javascript
   router.get("/login", function(req, res, next) {
     res.render("login", {
       title: "Login to Tutorial Nodejs Passport"
     });
   });
   ```

2. STEP2-02 logout post 함수 작성

4. ```javascript
   app.get('/logout', function(req, res){
     req.logout();
     res.redirect('/');
   });
   ```