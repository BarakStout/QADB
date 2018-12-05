var express = require('express'),
app = express(),
port = process.env.PORT || 3000;
app.listen(port);
console.log('QADB RESTful API server started on: ' + port);

var sql = require('./model/db.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/appRoutes.js'); //importing route
routes(app); //register the route
