var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.send('hello world!')
})

app.listen(port, function() {
    console.log('running on', port);

})