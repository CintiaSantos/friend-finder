var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3001;

var apiRoutes = require('./app/Routes/apiRoutes.js');
var htmlRoutes = require('./app/Routes/htmlRoutes.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

apiRoutes(app);
htmlRoutes(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});





















 