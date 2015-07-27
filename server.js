"use strict";

// Modules
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public')); 

// Routes
require('AGL/routes')(app);

// Start App
app.listen(80);
console.log("Server started on port 80");
