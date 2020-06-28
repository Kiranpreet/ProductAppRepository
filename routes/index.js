var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.hostname);
  res.render('index', { title: "From address="+req.hostname+req.ip });
});

module.exports = router;
