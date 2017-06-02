'use strict'

//acabmos de declarar mongoose y al tipo esquema
var mongoose = require('mongoose');
var Schema  = mongoose.Schema;

var PublicacionSchema = Schema({
		usuariocreador:String,
		contenido:String,
		foto:String,
		fechapublicacion:{type:Date, default:Date.now},
		comentario:[
		{
			nombre:String,
			contenido:String,
			fechacomentario:{type:Date, default:Date.now},
			foto:String,
		}]
	});

module.exports = mongoose.model('Publicacion',PublicacionSchema);