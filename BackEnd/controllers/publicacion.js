'use strict'

var Publicacion = require('../models/publicacion');

function getPublicacion(req, res){
	var publicacionId = req.params.id;
	Publicacion.findById(publicacionId, function(err,publicacion)// Acá estamos buscando por un Id
	{
		if(err)
		{
			res.status(500).send({message: 'Error al devolver el marcador'});
		}
		else 
		{
			if(!publicacion)
			{
				res.status(404).send({message:'No hay marcador'});
			}
			else
			{
			res.status(200).send({publicacion});
			}
		}
	});
}


function getPublicaciones(req, res){
	Publicacion.find({}).sort('-id').exec((err,usuarios)=>//acá está ordenando a través del id
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


function savePublicaciones(req, res){
	var publicar = new Publicacion();
	var params = req.body;

	publicar.usuariocreador = params.usuariocreador;
	publicar.contenido = params.contenido;
	publicar.foto =params.foto;
	publicar.fechapublicacion;

	publicar.save((err, publicacionStored)=> 
	{
		if(err)
		{
			res.status(500).send({message: 'Error al guardar el marcador Usuario'});
		}
		else
		{
			res.status(200).send({publicar: publicacionStored});	
		}
	}); 
}


function deletePublicacion(req, res) {
	var publicacionId = req.params.id;
	Publicacion.findById(publicacionId, function(err,usuario)// Acá estamos buscando por un Id
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
	getPublicacion,
	getPublicaciones,
	savePublicaciones,
	deletePublicacion
}