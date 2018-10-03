
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");
var apis = require("./apis.js")

var yKey = process.env.NODE_YKEY;
var rKey = process.env.NODE_RKEY;

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/static", express.static(path.join(__dirname,"static")));

app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    return res.render("index", {title: "Hello World" });
});
app.get("/form", function(req, res) {
    return res.render("form");
});

app.post("/form", function(req, res) {
    var rakutenReq = request.get({
        url: "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706",
        qs: {
            applicationId: rKey,
            keyword: req.body.sentence,
        }
    }, function(error,response, body){
        apis.rakutenApi(body);
        apis.yahooApi();
    });
    
});

var server = http.createServer(app);
server.listen(3000);

