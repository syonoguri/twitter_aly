var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser")
var path = require("path");
var logger = require("morgan");
var request = require("request")
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

app.post("/signin",
  passport.authenticate("local", { successRedirect: "./routes/index",
                                   failureRedirect:"./routes/signin",
                                  　failureFlash: true })
);

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
app.use(passport.initialize());
app.use(session({ secret: "cats" }));
app.use(passport.session());

passport.use(new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password"
  },
  function(username, password, done){
    console.log("nowlogining")
    connection.query("select * from login;",function(err,users){
      if(err) {return done(err);}
      for(i=0; i<users.length; i++){
        if(users[i].name == username && users[i].password == password){
          console.log("success!");
          return done(null, username);
        }
      }
      return done(null, false, {message:"invalid"});
    });
  }
)); 

passport.serializeUser((username, done) => {
  return done(null, username);
});

passport.deserializeUser(function(username, done) {//ここがおかしい。
	console.log('deserializeUser');
	done(null, {name:username, msg:'my message'});
});

// signinページの追加
var signinRouter = require('./routes/signin.js');
app.use(signinRouter);

//indexページの追加
var index = require("./routes/index.js");
app.use(index);



var server = http.createServer(app);
server.listen(3000);