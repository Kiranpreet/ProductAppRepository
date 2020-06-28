
var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');

router.use(bodyParser.json()); // for parsing application/json
//router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all products. */
router.get('/', function(req, res, next) {
  var sql = "SELECT * FROM products";
  db.query(sql, function(err, rows, fields) {
    if (err) {
      req.flash('error', err);
        // render to views/books/index.ejs
      res.render('products',{data:''});
      //res.status(500).send({ error: 'Something failed!' })
    }else {
      // render to views/books/index.ejs
      res.render('products/index',{data:rows, title: "From address="+req.hostname+req.ip});
  }
   
  })
});

/*get method for fetch single product*/
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM products WHERE id=${id}`;
  db.query(sql, function(err, row, fields) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json(row[0])
  })
});

/*

router.post('/create', function(req, res, next) {
  var name = req.body.name;
  var quantity = req.body.quantity;
  var price = req.body.price;

  var sql = `INSERT INTO products (name, quantity, price) VALUES ("${name}", "${quantity}", "${price}")`;
  db.query(sql, function(err, result) {
    if(err) {
      res.status(500).send({ error: 'Something failed!' })
    }
    res.json({'status': 'success', id: result.insertId})
  })
});
*/


module.exports = router;

