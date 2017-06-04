export interface Usuario {
	correo:string;
	fechaUnion?: Date;
	loginAttemps?: number;
	nombre: string;
	password:string;
	__v?: number;
	_id?: number;
	foto?: string;
	portada?: string;
	fechaNac?: Date;
	desc?: string;
}
