var http = require("http");
var path = require("path");
var morgan = require("morgan");
var express = require("express");
var bodyParser = require("body-parser");
var key = process.env.NODE_KEY;

var app = express();

app.use(morgan("combined"));

app.use("/static", express.static(path.join(__dirname,"static")));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    return res.render("index", {title: "Hello World" });
});

app.get("/form", function(req, res) {
    return res.render("form");
});

app.post("/form", function(req, res){
    var webclient = require("request");
    webclient.get({
        url: "https://jlp.yahooapis.jp/KeyphraseService/V1/extract?appid="+key+"&sentence="+stext+"&output=json" 
    })
    return res.render("result", {username: req.body.username, message: req.body.message, key});
});

var server = http.createServer(app);
server.listen(3000);