'use strict'

var express= require('express');
var UsuarioController =require('../controllers/usuario'); 
var api=express.Router();

api.get('/usuario/:id', UsuarioController.getUsuario);
api.get('/usuarios', UsuarioController.getUsuarios);
api.post('/usuario', UsuarioController.saveUsuarios);
api.put('/usuario', UsuarioController.updateUsuario);
api.delete('/usuario/:id', UsuarioController.deleteUsuario);


module.exports=api;