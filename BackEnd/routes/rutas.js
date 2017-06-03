'use strict'

var express= require('express');
var UsuarioController =require('../controllers/usuario'); 
var PublicacionController = require('../controllers/publicacion');
var api=express.Router();

api.get('/usuario/:id', UsuarioController.getUsuario);	//de primero va la ruta y luego va el identificador
														//las operaciones se deben ejecutar sobre esa ruta 
api.get('/usuarios', UsuarioController.getUsuarios);
api.post('/usuario', UsuarioController.saveUsuarios);
api.post('/login', UsuarioController.postLogin);
api.put('/usuario/:id', UsuarioController.updateUsuario);
api.delete('/usuario/:id', UsuarioController.deleteUsuario);

api.get('/publicacion/:id', PublicacionController.getPublicacion);
api.get('/publicaciones/:usuariocreador', PublicacionController.getePublicacionesmias);
api.get('/publicacion', PublicacionController.getPublicacionesTodas);
api.post('/publicacion', PublicacionController.savePublicaciones);
api.put('/publicacion/:id', PublicacionController.updateImage);
api.delete('/publicacion/:id', PublicacionController.deletePublicacion);


module.exports=api;