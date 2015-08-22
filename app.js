var express = require('express'),
	config = require('./config/config.js'),
	routes = require('./routes.js');

var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/public'));

routes.constructor(app);

var server = app.listen(config.port, function () {
	var port = server.address().port;

	console.log('Server started at http://%s:%s', config.ip, port);
});