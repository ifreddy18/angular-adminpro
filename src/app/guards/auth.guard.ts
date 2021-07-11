import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {

	constructor(
		public usuarioService: UsuarioService,
		public router: Router) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

		return this.usuarioService.validarToken()
					.pipe(
						tap( estaAutenticado => {
							if (!estaAutenticado) {
								this.router.navigateByUrl('/login');
							}
						})
					);
	}
}
