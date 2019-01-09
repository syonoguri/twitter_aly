var express = require('express');
var router = express.Router();

// index.pugをgetした時にコールバックを実行
router.get('/', function(req, res, next) {
  console.log(req.user); // {name:'test'}
  if (req.user) { // ログインしているユーザーが存在する場合のみ有効
    res.render("index", { username: req.user.name});
  } else { // ユーザーが存在しなければ、サインインページへ飛ばされる
    res.redirect('/signin');
  }
});

module.exports = router;