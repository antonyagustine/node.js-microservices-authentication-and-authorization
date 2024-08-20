// Create node.js server using express
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});