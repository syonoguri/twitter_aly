
var express = require("express");
var http = require("http");
var html = require("html");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use("/static", express.static(path.join(__dirname,"static")));
app.set("view engine", "html");
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res){
    res.render("index");

})


var server = http.createServer(app);
server.listen(3000);

