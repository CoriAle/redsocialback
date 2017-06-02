'use strict'

var express= require('express');
var UsuarioController =require('../controllers/usuario'); 
var PublicacionController = require('../controllers/publicacion');
var api=express.Router();

api.get('/usuario/:id', UsuarioController.getUsuario);	//de primero va la ruta y luego va el identificador
														//las operaciones se deben ejecutar sobre esa ruta 
api.get('/usuarios', UsuarioController.getUsuarios);
api.post('/usuario', UsuarioController.saveUsuarios);
api.put('/usuario/:id', UsuarioController.updateUsuario);
api.delete('/usuario/:id', UsuarioController.deleteUsuario);

api.get('/publicacion/:id', PublicacionController.getPublicacion);
api.get('/publicacion', PublicacionController.getPublicaciones);
api.post('/publicacion', PublicacionController.savePublicaciones);
api.delete('/publicacion/:id', PublicacionController.deletePublicacion);


module.exports=api;