var express = require('express');
const cors = require('cors');
var tmdb = require('./routes/tmdb');

var app = express();
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.use('/tmdb', tmdb);

var server = app.listen(8080, function() {
    console.log("Backend Application listening at http://localhost:8080");
});

module.exports = app;