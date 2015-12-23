var express = require('express'),
    session = require('express-session'),
    logger = require('morgan'),
    app = express();

module.exports = app;

app.use(logger());
app.use(express.static('public'));
app.use(session({
    secret: 'random-value'
}));

app.get('/', function (req, res) {
    res.render("index");
});

