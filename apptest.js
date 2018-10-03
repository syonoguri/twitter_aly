var chai = require("chai");
var assert = chai.assert;

var myFunc = function(a,b){
    return a + b;
};

describe("仮テスト" function(){
    it("myFuncのテスト",function(){
        assert.strictEqual(myFunc(1,2),3)
    });
});