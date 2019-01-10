var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var morgan = require("morgan");
var fetch = require("isomorphic-fetch");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/static", express.static(path.join(__dirname,"static")));
app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));


var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');

// signinページの追加
var signinRouter = require('./signin.js');
app.use(signinRouter);

//indexページの追加
var index = require("./index.js");
app.use(index);

// session, passport.initialize, passport.sessionは以下の順番で追加
app.use(session({
  secret: "testing",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// authentication
passport.serializeUser(function(username, done) {
  console.log('serializeUser');
  done(null, username);
});

passport.deserializeUser(function(username, done) {
  console.log('deserializeUser');
  done(null, {name:username});
});

passport.use(new LocalStrategy(
  {
    // signinのformで定義したnameの要素をセット
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done){
    // ここでは、データベースを使わずに、仮にusernameとpasswordを固定で入れています。
    if(username == "test" && password == 123456789){
      return done(null, username);
    }
    return done(null, false, {message: "invalid"});
  }
));

app.post('/signin',
  passport.authenticate('local',
    {
      successRedirect: "/success",
      failureRedirect: "/signin",
      failureFlash: "Invalid username or password"
    }
  ));
var server = http.createServer(app);
server.listen(3000);