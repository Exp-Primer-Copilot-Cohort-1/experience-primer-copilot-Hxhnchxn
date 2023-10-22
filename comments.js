//create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
var fs = require('fs');
var cors = require('cors');
app.use(cors());
var comments = require('./comments.json');
var path = require('path');
var port = 300;

//test
app.get('/', function(req, res) {
    res.send('Hello World!');
});

//get all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

//get comment by id
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments.find(comment => comment.id == id);
    res.json(comment);
});

//post new comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    res.json(comment);
});

//update comment by id
app.put('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments.find(comment => comment.id == id);
    comment.name = req.body.name;
    comment.email = req.body.email;
    comment.comment = req.body.comment;
    res.json(comment);
});

//delete comment by id
app.delete('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = comments.find(comment => comment.id == id);
    comments.splice(comments.indexOf(comment), 1);
    res.json(comment);
});

//start server
app.listen(port, function() {
    console.log('Example app listening on port ' + port + '!');
});
