'use strict'

var path=require('path');//vamos a sacar la ruta donde lo vamos a guardar
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
	var publicacionId=req.params.id;
	var comentario={"nombre":req.body.nombre,"contenido":req.body.contenido};
	Publicacion.findByIdAndUpdate(publicacionId,{$push:{comentario:comentario}},(err,nuevoComentario)=>
		{
			if(err)
			{
				res.status(500).send({message:'Error al crear comentario'});
			}
			else
			{
				if(!nuevoComentario)
				{
					res.status(404).send({message:'No se esta creando ningún comentario'});
				}
				else
				{
					res.status(200).send({Creado: nuevoComentario});
				}
			}
		});
}
//cuando qujiero actualizar la iimagen
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


//con este método servirá para subir imágenes al servidor
function uploadFotos(req, res)
{
	var comentarioId=req.params.id;
	var filename='No subido..';

	if(req.files)//con esto para ficheros entrados por http
	{
		var file_path = req.files.image.path; //el nombre de donde se va a cargar la imagen será image
		var file_split = file_path.split('\\');
		var file_name = file_split[1];
		Publicacion.findByIdAndUpdate(comentarioId, {foto:file_name}, (err, publicacionUpdate)=>
		{
			if(err)
			{
				res.status(404).send({message: 'Error en la petición'});
			}
			else
			{
				if(!publicacionUpdate)
				{
					res.status(404).send({message:'No se ha actualizado la publicación'});
				}
				else
				{
				res.status(200).send({actualizado:publicacionUpdate});				
				}	
			}
		});
	}
	else
	{
		res.status(200).send({message:'No se pudo subir la imagen'});
	}
}

//getImage
var fs= require('fs');
function retornarFotos(req, res)
{
	var fotoFile=req.params.foto;
	fs.exists('./uploads/'+fotoFile,function(exists)
	{
		if(exists)
		{
			res.sendFile(path.resolve('./uploads/'+fotoFile));			
		}
		else
		{
			res.status(200).send({message:'No existe la imagen'});
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
	getePublicacionesmias,
	getPublicacionesTodas,
	NuevoComentario,
	uploadFotos, 
	retornarFotos,
	savePublicaciones,
	deletePublicacion
}