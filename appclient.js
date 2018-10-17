
var express = require("express");
var http = require("http");
var path = require("path");
var app = express();
var request = require("request")
var bodyParser = require("body-parser");
var morgan = require("morgan");

var yKey = process.env.NODE_YKEY;
var rKey = process.env.NODE_RKEY;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});
app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("http://localhost:3000/form", function(req, res) {
    if(req.body.sentence=="") {
        res.send("Error: 入力がありません")
    } else if(/^\s+$/.test(req.body.sentence)){
        res.send("Error: スペースのみでの検索はできません")
    } else {
        request.get({
            url: "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706",
            qs: {
                applicationId: rKey,
                keyword: req.body,
            }
        }, function(error,response,body){
        var analysisResultR = JSON.parse(body);
        console.log(analysisResultR);
        var resultArrayR = [];
        
        // 該当商品が無かった場合の処理
        if(analysisResultR["Items"][0]==undefined) {
            resultArrayR[0] = "Error:このキーワードでヒットする商品がありません。";
            res.send(resultArrayR[0]);
            return;
        }

        // 検索でヒットした商品のタイトルを配列に格納
        for(var i=0; i<30; i++){    
            resultArrayR.push(analysisResultR["Items"][i]["Item"]["itemName"]);
            // 検索結果が30商品に満たなかった場合の処理
            if(analysisResultR["Items"][i+1] == undefined) break;
        }
        // 配列に格納した商品タイトルを文字列に変換
        var resultOutputR = resultArrayR.join("");

        var analysis = request.post({
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
            var analysisResult = JSON.parse(body);
            var resultArray = [];
            for(var i in analysisResult){
                resultArray.push(i+":"+analysisResult[i]);
            }
            var resultOutput = resultArray.join(" , ");
            console.log(analysisResult);
            res.send(resultOutput);
        }); 
    });
    }
});

var server = http.createServer(app);
server.listen(3000);

