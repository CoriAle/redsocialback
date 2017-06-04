import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private router: Router,
  				private _login: LoginService) { }

  canActivate(ext: ActivatedRouteSnapshot, state: RouterStateSnapshot){
  	console.log("aut")
  	if(this._login.isAutenticated()){
  		console.log(localStorage.USUARIO)
  		return true;
  	}
  	else
  	{
  		this.router.navigate(['/login'])
  		console.log("No está logeado");
  		return false;
  	}
  	//canActiveLogin(ext: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  }

}
