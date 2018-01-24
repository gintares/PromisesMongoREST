var express = require('express');
var app = express();

app.get('/', function(req, res, next) {
    res.render('index');
});

app.listen(3000);
console.log('Express started on port 3000');