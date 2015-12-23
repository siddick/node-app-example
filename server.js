var app = require('./app.js'),
    port = parseInt(process.env.PORT || 8000);

app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log('listening on', port);
});
