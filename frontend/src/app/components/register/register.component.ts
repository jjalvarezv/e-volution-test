import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [UserService]
})
export class RegisterComponent implements OnInit {

	public name: string;
	public email: string;
	public password: string;
	public registerComplete: boolean;

	constructor(
		private user_service: UserService
	) {
		this.registerComplete = false;
	}

	ngOnInit(): void {
	}

	public onRegister(form: NgForm) {

		const newUser = new User('', this.name, this.email, this.password);

		this.user_service.saveUser(newUser).subscribe(
			(response)=>{
				this.registerComplete = true;
				form.reset();
			},
			(reject) => {
				alert('Hubo un error');
			});

	}


}
