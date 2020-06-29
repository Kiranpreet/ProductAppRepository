
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'ProductsDB'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected!');
});

module.exports = connection;

