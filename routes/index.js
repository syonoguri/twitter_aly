var express = require('express');
var router_index = express.Router();

// index.pugをgetした時にコールバックを実行
router_index.get('/', function(req, res, next) {
  console.log(req.username); // {name:'test'}
  if (req.username) { // ログインしているユーザーが存在する場合のみ有効
    console.log("logined")
    res.render("/", { username: req.username});
  } else { // ユーザーが存在しなければ、サインインページへ飛ばされる
    console.log("notlogined")
    res.redirect("/signin");
  }
});

module.exports = router_index;