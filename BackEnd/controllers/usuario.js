'use strict'

var Usuario = require('../models/usuario');
function prueba(req, res){

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
}


function getUsuario(req, res){
	var usuarioId = req.params.id;
	Usuario.findById(usuarioId, function(err,usuario)// Acá estamos buscando por un Id
	{
		if(err)
		{
			res.status(500).send({message: 'Error al devolver el marcador'});
		}
		else 
		{
			if(!usuario)
			{
				res.status(404).send({message:'No hay marcador'});
			}
			else
			{
			res.status(200).send({plax: usuario});
			}
		}
	});
}


function getUsuarios(req, res){
	Usuario.find({}).sort('-id').exec((err,usuarios)=>//acá está ordenando a través del id
		{
			if(err)
			{
				res.status(500).send({message: 'Error al devolver los marcadores'});
			}
			else
			{

				if(!usuarios)
				{
					res.status(404).send({message:'No hay marcadores'});
				}
				else
				{
				res.status(200).send(usuarios);
				}
			}
		});
}


function saveUsuarios(req, res){
	var usuario = new Usuario();
	var params = req.body;

	usuario.nombre = params.nombre;
	usuario.correo = params.correo;
	usuario.fechaUnion =params.fechaUnion;
	usuario.descripcion = params.descripcion;
	usuario.cumpleanios = params.cumpleanios;
	usuario.fotoperfil = params.fotoperfil;
	usuario.fotoportada = params.fotoportada;
	usuario.password = params.password;

	usuario.save((err, usuarioStored)=> 
	{
		if(err)
		{
			res.status(500).send({message: 'Error al guardar el marcador Usuario'});
		}
		else
		{
			res.status(200).send({usuario: usuarioStored});	
		}
	}); 
}


function updateUsuario(req, res){
	var update = req.body;
	var usuarioId=req.params.id;
	Usuario.findByIdAndUpdate(usuarioId, update, (err, usuarioUpdate)=>
		{
			if(err)
			{
				res.status(500).send({message:'Error al actualizar el marcador'});
			}
			else
			{
				res.status(200).send({usuario : usuarioUpdate});	
			}
			
		});
}


function deleteUsuario(req, res) {
	var usuarioId = req.params.id;
	Usuario.findById(usuarioId, function(err,usuario)// Acá estamos buscando por un Id
	{
		if(err)
		{
			res.status(500).send({message: 'Error al devolver el marcador'});
		}
		if(!usuario)
		{
			res.status(404).send({message:'No hay marcador'});
		}
		else
		{
			usuario.remove(err => 
			{
				if(err)
				{
					res.status(500).send({message: 'Error al borrar'});
				}
				else
				{
					res.status(200).send({message:'El marcador se ha eliminado'})
				}
			});
		}
	});
}



module.exports = {
	getUsuario,
	getUsuarios,
	saveUsuarios,
	updateUsuario,
	deleteUsuario
}