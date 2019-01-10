var express = require('express');
var router_signin = express.Router();

router.get('/', function(req, res, next) {
  res.render("signin", {});
});

module.exports = router_signin;