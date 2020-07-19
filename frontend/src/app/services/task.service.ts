import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from './routes';
import { Observable } from 'rxjs';

@Injectable()
export class TaskService{

    private taskUrl: string;
    constructor(
        private _http: HttpClient
    ) {
        this.taskUrl = ApiRoutes.taskUrl;
    }

    public getTasks():Observable<any> {

        return this._http.get(this.taskUrl+'/getTask');
    }

}