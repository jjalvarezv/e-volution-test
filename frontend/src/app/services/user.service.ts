
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiRoutes } from './routes';
import { Observable } from 'rxjs';
import { JwtResponseI } from '../models/jwt-response';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    private userUrl: string;

    constructor(
        private _http: HttpClient,
        private router: Router
    ){
        this.userUrl = ApiRoutes.userUrl;
    }

    // save user in DB with post petition
    public saveUser(newUser: User):Observable<JwtResponseI>{
        
        return this._http.post<JwtResponseI>(this.userUrl+'/saveUser',newUser);
    }

    // login
    public login(loginData: Object): Observable<JwtResponseI>{

        return this._http.post<JwtResponseI>(this.userUrl+'/login', loginData);
    }

    public loggedIn(): boolean{
        if (localStorage.getItem('ACCESS_TOKEN')) return true;
        else return false;
    }
    public logout(): void{
        // Delete localstorage
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('EXPIRES_IN');
        // redirection to login
        this.router.navigate(['/login']);
    }

}