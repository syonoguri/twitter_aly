var express = require('express');
var router_signin = express.Router();

router_signin.get('/', function(req, res, next) {
  res.render("/", {});
});

module.exports = router_signin;