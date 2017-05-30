'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3678;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/prueba/:nombre?', function(req, res){

	if(req.params.nombre){
		var nombre = req.params.nombre;
	}
	else
	{
		var nombre = "sin nombre";
	}
	

	res.status(200).send({
		data: [1,2,3],
		message: "Hola mundo con NodeJs y Express -"+nombre
	});
});

app.listen(port, function(){
	console.log( `appi resta https://localhost:${port}`);

});

