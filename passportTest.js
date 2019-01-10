var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
var logger = require("morgan");
var fetch = require("isomorphic-fetch");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require("connect-flash");
var mysql = require("/usr/local/lib/node_modules/mysql");
var connection = mysql.createConnection({
    host:"localhost",
    database:"rakutenapplication",
    user:"dbuser",
    password:"gladcubeogr"
});
app.use(flash());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/static", express.static(path.join(__dirname,"static")));
app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");
app.use(logger("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

// signinページの追加
var signinRouter = require('./signin.js');
app.use(signinRouter);

//indexページの追加
var index = require("./index.js");
app.use(index);

passport.use(new LocalStrategy(
  {
    usernameField: "name",
    passwordField: "password"
  },
  function(username, password, done){
    connection.query("select * from users;",function(err,users){
      for(i=0; i<users.length; i++){
        if(users[i].name == username && users[i].password == password){
          return done(null, username);
        }
      }
      return done(null, false, {message:"invalid"});
    });
  }
)); 

app.post("/signin",
  passport.authenticate("local", { successRedirect: "/index",
                                    failureRedirect:"/signin",
                                      failureFlash: true })
);




var server = http.createServer(app);
server.listen(3000);