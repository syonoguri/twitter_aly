var express = require("express");
var http = require("http");
var app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var fetch = require("isomorphic-fetch");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var session = require("express-session");

// signin ページの追加
var signinRouter = require(".routes/signin");
app.use("/signin");

// session, passport.initialize, passport.sessionは以下の順番で追加
app.use(session({
  secret: "testing",
  resave: false,
  saveUninitialized: true
}));
app.use(passport.itinialize());
app.use(passport.session());

//authentication
passport.serializeUser(function(username,done){
  console.log("serializeUser");
  done(null,username);
});

passport.deserializeUser(function(username,done){
  console.log("deserializeUser");
  done(null,{name:username});
});

passport.use(new LocalStrategy(
  {
    // signinのformで提議したnameの要素をセット
    usernameField: "username",
    passwordField: "password"
  },
  function(username,password,done){
    //仮にusernameとpasswordを設置
    if(username == "test" && password == 123456789){
      return done(null, username);
    }
    return done(null,false, {message: "invalid"});
  }
));

app.post("/signin",
  passport.authenticate("local",
  {
    failureRedirect: "/signin"
  }
  ),
  function(req,res,next){
    fetch("http://localhost:3000/signin",
    {
      credentials:"include"
    }
    ).then(function(){
      res.redirect("/");
    }).catch(function(e){
      console.log(e);
    });
  }
);

var server = http.createServer(app);
server.listen(3000);