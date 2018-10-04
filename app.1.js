
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");
var yKey = process.env.NODE_YKEY;
var rKey = process.env.NODE_RKEY;
var GetKeyword = {
    rakutenApi: function(req, res) {
        if(req.body.sentence==""){
            res.render("result",{result: "Error: 入力がありません"})
        } else {
            request.get({
                url: "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706",
                qs: {
                    applicationId: rKey,
                    keyword: req.body.sentence,
                }
            }, function(error,response,body){
                var analysisResultR=JSON.parse(body);
                this.rakutenCallback(error,response,body);
            });
        }
    },
    rakutenCallback: function(error,response,body){
        this.thereIsNoItem(analysisResltR);
        this.itemNameToArray(analysisResltR);
    },
    thereIsNoItem: function(analysisResultR){
        if(analysisResultR["Items"][0]==undefined) {
            res.render("result",{result: "Error:このキーワードでヒットする商品がありません。"});
            return;
        }
    },
    itemNameToArray: function(analysisResltR){
        var resultArray=[];
        for(var i=0; i<30; i++){    
            resultArray.push(analysisResultR["Items"][i]["Item"]["itemName"]);
            // 検索結果が30商品に満たなかった場合の処理
            if(analysisResultR["Items"][i+1] == undefined) break;
        }
        return resultArray;
    },
    yahooTextApi: function(){
        var resultOutputR=this.itemNameToArray(analysisResltR).join("");
        request.post({
            url: "https://jlp.yahooapis.jp/KeyphraseService/V1/extract",
            headers: {
                "content-type": "application/json"
            },
            form: {
                appid: yKey,
                sentence: resultOutputR,
                output: "json"
            }
        }, function(error, response, body){
            this.yahooResultToStr();
        }); 
    },
    yahooResultToStr: function(body){
        var analysisResult = JSON.parse(body);
        var resultArray = [];
        for(var i in analysisResult){
            resultArray.push(i+":"+analysisResult[i]);
        }
        var resultOutput = resultArray.join(" , ");
        res.render("result",{result: resultOutput});
    }
}

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
    GetKeyword.rakutenApi(req, res);
    GetKeyword.yahooTextApi();
});

var server = http.createServer(app);
server.listen(3000);

