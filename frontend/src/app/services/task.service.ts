import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiRoutes } from './routes';
import { Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable()
export class TaskService{

    private taskUrl: string;
    constructor(
        private _http: HttpClient
    ) {
        this.taskUrl = ApiRoutes.taskUrl;
    }

    public getTasks(owner:string):Observable<any> {

        return this._http.get(this.taskUrl+'/getTask/'+owner);
    }

    public addTask(data:Task):Observable<Task>{

        return this._http.post<Task>(this.taskUrl+'/createTask', data);
    }

    public deleteTask(idTask:string): Observable<any>{

        return this._http.delete(this.taskUrl+'/deleteTask/'+idTask);
    }

    public editTask(data:Object, idTask:string): Observable<Object>{

        return this._http.put(this.taskUrl+'/updateTask/'+idTask, data);
    }

}