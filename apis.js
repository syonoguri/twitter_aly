module.exports = {

    rakutenApi: function(body){
        var analysisResultR = JSON.parse(body);
        var resultArrayR = [];

        // 該当商品が無かった場合の処理
        if(analysisResultR["Items"][0] == undefined) {
            resultArrayR[0] = "Error:このキーワードでヒットする商品がありません。";
            res.render("result",{result: resultArrayR[0]});
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
    },

    yahooApi: function(){
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
            var resultOutput = resultArray.join(" , ")
            res.render("result",{result: resultOutput});
        });
    }
}