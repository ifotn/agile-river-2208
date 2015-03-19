var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('welcome to express');
});

var server = app.listen(1337, function() {
	var port = server.address().port;

	console.log('first express app listening on port:' + port);
});