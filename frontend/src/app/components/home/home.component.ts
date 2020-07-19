import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/task';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [TaskService]
})
export class HomeComponent implements OnInit {

	private opc: boolean;
	private idTask: string;
	public tasksArray: Array<Object>;
	public add : boolean;
	public del : boolean;
	public edit : boolean;

	constructor(private task_service: TaskService) {
		this.opc = false;
	}

	// Get and Set of Opc
	public getOpc(): boolean {
		return this.opc;
	}
	public setOpc(newVal) {
		this.opc = newVal;
		this.add = newVal;
		this.del = newVal;
		this.edit = newVal;
	}
	//Get and set of id

	public setId(newVal) {
		this.idTask = newVal;
	}

	ngOnInit(): void {
		this.tasks();
		this.add = false;
		this.del = false;
		this.edit = false;
	}

	public showModal(action:string, id) {
		this.opc = true;
		if (action == 'add'){
			this.add = true;
		} else if (action == 'delete') {
			this.del = true;
			this.setId(id);
		} else if (action == 'edit') {
			this.edit = true;
			this.setId(id);
		}
	}

	public tasks(){
		const owner = localStorage.getItem('name');

		this.task_service.getTasks(owner).subscribe(
			response => {
				this.tasksArray = response;
			},
			reject => {
				console.log(reject);
			}
		);
	}

	public onAdd(form:NgForm):void{

		const data = {
			name: form.value.name,
			priority: form.value.priority,
			expirationDate: form.value.expirationDate,
			owner: localStorage.getItem('name')
		}
		
		let newTask = new Task('',data.name,data.priority,data.expirationDate,data.owner);
		
		this.task_service.addTask(newTask).subscribe(
			response => {
				this.tasks();
			},
			reject => {
				alert('Error al Agregar');
			}
		);
	}

	public delTask():void {

		this.task_service.deleteTask(this.idTask).subscribe(
			response => {
				this.tasks();
				// const succesful = document.querySelector('.succesful');
				// succesful.style.display = "block";
			},
			reject => {
				alert('Error al Eliminar');
			}
		);
	}

	public onEdit(form:NgForm):void{

		const data = {
			name: form.value.name,
			priority: form.value.priority,
			expirationDate: form.value.expirationDate,
			owner: localStorage.getItem('name')
		}
			
		this.task_service.editTask(data,this.idTask).subscribe(
			response => {
				this.tasks();
			},
			reject => {
				alert('Error al Agregar');
			}
		);
	}

}
