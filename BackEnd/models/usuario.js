'uses strict'

var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
	nombre: {type:String, required:true, index:{unique:true}},	
	password:{type:String, required:true},
	correo:{type:String, required:true},
	fechaUnion: [Date],
	descripcion:String,
	cumpleanios:[Date],
	fotoperfil:String,
	fotoportada:String
});

module.exports = mongoose.model('Usuario',UsuarioSchema);//lo primero será el nombre del modelo y de allí el nombre del esquema