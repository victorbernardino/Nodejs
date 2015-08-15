var http = require('http'),
 	express = require('express'),
 	config = require('./config/config.js'),
 	routes = require('./routes.js');

 var app = express();

 app.use(express.static(__dirname + '/'));
 app.use(express.static(__dirname + '/view'));
 app.use(express.static(__dirname + '/public'));
 
 app.get('/', function(req, res){
 	routes.homePage(req, res);
 });

 app.get('/id', function(req, res){
 	res.send('Eitcha!');
 })

 var server = app.listen(config.port, function(){
 	var host = server.address().address;
 	var port = server.address().port;

 	console.log('Example app listening at http://%s:%s', config.ip, port);
 })