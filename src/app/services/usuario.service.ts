import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment.prod';
import { RegisterForm } from '../interfaces/register-form.interface';
import { LoginForm } from '../interfaces/login-form.interface';

const base_url = environment.base_url;
declare const gapi: any;

@Injectable({
	providedIn: 'root',
})
export class UsuarioService {

	public auth2: any;

	constructor(
		private http: HttpClient,
		private router: Router,
		private ngZone: NgZone
	) {
		this.googleInit();
	}

	validarToken(): Observable<boolean> {
		const token = localStorage.getItem('token') || '';

		return this.http.get(`${base_url}/login/renew`, {
			headers: {
				'x-token': token
			}
		}).pipe(
			tap((resp: any) => {
				localStorage.setItem('token', resp.token);
			}),
			map(resp => true),
			catchError(error => of(false))
		);
	}

	crearUsuario(formData: RegisterForm): Observable<object> {
		return this.http.post(`${base_url}/usuarios`, formData)
			.pipe(
				tap((resp: any) => {
					localStorage.setItem('token', resp.token);
				})
			);
	}

	login(formData: LoginForm): Observable<object> {
		return this.http.post(`${base_url}/login`, formData)
			.pipe(
				tap((resp: any) => {
					localStorage.setItem('token', resp.token);
				})
			);
	}

	loginGoogle(token: string): Observable<object> {
		return this.http.post(`${base_url}/login/google`, { token })
			.pipe(
				tap((resp: any) => {
					localStorage.setItem('token', resp.token);
				})
			);
	}

	googleInit(): Promise<void> {

		return new Promise<void>( resolve => {
			gapi.load('auth2', () => {
				this.auth2 = gapi.auth2.init({
					client_id: '997654366302-dr7d9t75lkaa4dvlkm65thlp42960vk7.apps.googleusercontent.com',
					cookiepolicy: 'single_host_origin',
				});
				resolve();

			});
		});
	}

	logout(): void {
		localStorage.removeItem('token');

		this.auth2.signOut().then(() => {
			this.ngZone.run(() => {
				this.router.navigateByUrl('/login');
			});
		});
	}


}
