/* ----------------------------------------------------------------




---------------------------------------------------------------- */


var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");

var key = process.env.NODE_KEY;

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
    var analysis = request.get({
        url: "https://jlp.yahooapis.jp/KeyphraseService/V1/extract",
        qs: {
            appid: key,
            sentence: req.body.sentence,
            output: "json"
        }
    }, function(error, response, body){
        var analysisResult = JSON.parse(body);
        var resultArray = [];
        for(var i in analysisResult){
            resultArray.push(i+":"+analysisResult.i);
        }
        console.log(resultArray);
        var resultOutput = resultArray.join(" , ")
        
        res.render("result",{result: resultOutput});
    }); 
});

var server = http.createServer(app);
server.listen(3000);

