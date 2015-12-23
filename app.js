var express = require('express'),
    session = require('express-session'),
    logger = require('morgan'),
    adaro = require('adaro'),
    app = express();
module.exports = app;

app.engine('dust', adaro.dust({ cache: false }));
app.set('view engine', 'dust');

app.use(logger());
app.use(express.static('public'));
app.use(session({
    secret: 'random-value'
}));

app.get('/', function (req, res) {
    res.render("index");
});

