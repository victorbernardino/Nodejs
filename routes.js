exports.constructor = function(app){
	app.get('/', homePage);
	app.get('/2', secondPage);
	app.get('/about', about);
	app.get('/eitcha', eitcha);	
	app.use(error);
};

function homePage(req, res){
	res.render(__dirname+ '/view/index.html');
}

function secondPage(req, res){	
	res.sendFile(__dirname +'/view/secondPage.html');
}

function about(req, res){
	res.sendFile(__dirname + '/view/about.html');
}

function eitcha(req, res){
	res.send('Eitcha!');
}

function error(err, req, res, next){
	console.error(err.stack);
	res.status(404).send('Sorry for the inconvenience but an error just happened!');
}