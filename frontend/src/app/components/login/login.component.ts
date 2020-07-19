import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [
		UserService
	]
})
export class LoginComponent implements OnInit {

	public email: string;
	public password: string;
	constructor(
		private user_service: UserService,
		private router: Router
	) { }

	ngOnInit(): void {
	}

	public onLogin(form: NgForm): void {
		
		const loginData = {
			email: this.email,
			password: this.password
		}
		
		this.user_service.login(loginData).subscribe(
			response => {
				this.saveToken(response);
				form.reset();
				this.router.navigate(['/home']);
			},
			reject => {
				form.reset();
				alert('Datos Incorrectos');
			}
		);
	}

	private saveToken(data): void{
		localStorage.setItem('ACCESS_TOKEN', data.access_token);
		localStorage.setItem('name', data.name);
	}

}
