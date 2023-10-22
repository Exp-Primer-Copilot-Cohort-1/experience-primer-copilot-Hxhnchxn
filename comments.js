// Create web server application with Node.js and Express.js
// Run with: node comments.js
// Load in browser: http://localhost:8080/comments.html

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());