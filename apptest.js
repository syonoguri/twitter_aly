var chai = require("chai");
var assert = chai.assert;

/*
var myFunc = function(a,b){
    return a + b;
};

describe("仮テスト", function(){
    it("myFuncのテスト",function(){
        assert.strictEqual(myFunc(1,2),3)
    });
});
*/
var analysisResultR = JSON.parse(body);
var resultArrayR = [];

var jsonToArray = function(){
    // 該当商品が無かった場合の処理
    if(analysisResultR["Items"][0]==undefined) {
        resultArrayR[0] = "Error:このキーワードでヒットする商品がありません。";
        return resultArrayR;
    }
    // 検索でヒットした商品のタイトルを配列に格納
    for(var i=0; i<30; i++){    
        resultArrayR.push(analysisResultR["Items"][i]["Item"]["itemName"]);
        // 検索結果が30商品に満たなかった場合の処理
        if(analysisResultR["Items"][i+1] == undefined) return resultArrayR;}
}

describe("楽天のテスト",function(){
    it("JSONから配列へ", function(){
        assert.isArray(jsonToArray(analysisResultR));
    });
});

//-----------------------------------------------------------------------

/*
var analysisResult = JSON.parse(body);
var resultArray = [];
for(var i in analysisResult){
    resultArray.push(i+":"+analysisResult[i]);
}
var resultOutput = resultArray.join(" , ");
res.render("result",{result: resultOutput});
*/