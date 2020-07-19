import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(
		private user_service: UserService,
		private router: Router
	) {

	}

	canActivate(): boolean {
		if (this.user_service.loggedIn()) {
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}

}
