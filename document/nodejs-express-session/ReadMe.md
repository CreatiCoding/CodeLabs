> **nodejs-express-session**

# express-session 활용한 세션 인증

> **추후에 codelab 작성 예정**

### 1. express-session 설치

```zsh
npm install -s express-session
yarn add express-session
```



### 2. app.js에 내용 추가

```javascript
var session = require("express-session");

app.use(session({
    secret: 'session secret key',
    resave: false,
    saveUninitialized: true
}));

/**
*	중략
*/

app.use(function (req, res, next) {
    if (!req.session.user) {
        req.session.user = {}
    }
    // get data from request
    var data = some(req);
    // set data to session
    req.session.user[data.name] = data.value;
    next();
})
```