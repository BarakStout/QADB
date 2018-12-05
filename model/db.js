'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'QADB',
});

connection.connect(function(err) {
    if (err) {console.log(err); throw err;}
});

module.exports = connection;