'uses strict'

var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
	nombre: String,
	correo:String,
	fechaUnion: [Date],
	descripcion:String,
	cumpleanios:[Date],
	fotoperfil:String,
	fotoportada:String,
	password:String
});

module.exports = mongoose.model('Usuario',UsuarioSchema);//lo primero será el nombre del modelo y de allí el nombre del esquema