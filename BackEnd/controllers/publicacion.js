'use strict'

var Publicacion = require('../models/publicacion');
var Usuario = require ('../models/usuario');
//busco una publicación en específico
function getPublicacion(req, res){
	var publicacionId = req.params.id;
	Publicacion.findById(publicacionId, function(err,publicacion)
	{
		if(err)
		{
			res.status(500).send({message: 'Error en la petición'});
		}
		else 
		{
			if(!publicacion)
			{
				res.status(404).send({message:'No se encontró la publicación'});
			}
			else
			{
				Usuario.populate(publicacion, {path:'usuariocreador'}, (err, publicacion)=>
				{
					if(err)
					{
						res.status(500).send({message: 'Error en el proceso'});
					}
					else
					{
						res.status(200).send({publicacion});
					}
				});
			}
		}
	});
}

//sólo listaré mis publicaciones
function getePublicacionesmias(req, res){
	var personacreadora= req.params.usuariocreador;
	Publicacion.find({}).where('usuariocreador').equals(personacreadora).sort('-usuariocreador').exec((err,usuarios)=>//acá está ordenando a través del id
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

function getPublicacionesTodas(req, res){
	Publicacion.find({}).sort('-_fechapublicacion').exec((err,usuarios)=>//acá está ordenando a través del id
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

//creo una publicación
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
			if(!publicacionStored)
			{
				res.status(404).send({message:'No se ha guardado la publicación'});
			}
			else
			{
			res.status(200).send({publicar: publicacionStored});				
			}	
		}
	}); 
}
//genera un nuevo comentarioj
function NuevoComentario(req, res)
{
	Publicacion.findByIdAndUpdate();
}

function updateImage(req,res)
{
	var publicacionId=req.params.id;
	var update=req.body; 
	Publicacion.findByIdAndUpdate(publicacionId, update, (err, publicacionUpdate)=>
	{
		if(err)
		{
			res.status(500).send({message: 'Error en la petición'});
		}
		else
		{
			if(!publicacionUpdate)
			{
				res.status(404).send({message:'No se ha actualizado la publicación'});
			}
			else
			{
			res.status(200).send({publicar: publicacionUpdate});				
			}	
		}
	});
}

//acá puedo eliminar una publicación
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
	getePublicacionesmias,
	getPublicacionesTodas,
	updateImage,
	savePublicaciones,
	deletePublicacion
}