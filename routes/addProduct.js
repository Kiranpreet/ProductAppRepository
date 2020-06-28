/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('addProduct/index', { title: 'Express' });
});

module.exports = router;*/

var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.get('/', function(req, res, next) {
    res.render('addProduct/index', { title: 'Express' });
  });
/*post method for create product*/
router.post('/index', function(req, res, next) {
  var name = req.body.name;
  var quantity = req.body.quantity;
  var price = req.body.price;

  var sql = `INSERT INTO products (name, quantity, price) VALUES ("${name}", "${quantity}", "${price}")`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    //res.json({'status': 'success', id: result.insertId})
    return res.redirect('/products');
  })
});

module.exports = router;