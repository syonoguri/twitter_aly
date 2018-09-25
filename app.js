/* ----------------------------------------------------------------




---------------------------------------------------------------- */


var express = require("express");
var path = require("path");
var app = express();
var request = require("request")

var key = process.env.NODE_KEY;

app.use("/static", express.static(path.join(__dirname,"static")));

app.set("views", path.join(__dirname, "templates" ));
app.set("view engine", "pug");

app.get("/", function(req, res) {
    return res.render("index", {title: "Hello World" });
});

app.post("/form", function(req, res) {
    request.get({
        url: "https://jlp.yahooapis.jp/KeyphraseService/V1/extract",
        qs: {
            appid: key,
            sentence: req.body.sentence,
        }
    }, function(err, res, body){
        res.render("result", {result: body});
    });
});

var server = http.createServer(app);
server.listen(3000);