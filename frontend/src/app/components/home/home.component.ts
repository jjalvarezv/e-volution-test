import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
	providers: [TaskService]
})
export class HomeComponent implements OnInit {

	private opc: boolean;
	public tasksArray: Array<Object>;
	public add : boolean;
	public del : boolean;
	public edit : boolean;

	constructor(private task_service: TaskService) {
		this.opc = false;
	}

	ngOnInit(): void {
		this.tasks();
		this.add = false;
		this.del = false;
		this.edit = false;
	}

	public showModal(action:string) {
		this.opc = true;
		if (action == 'add'){
			this.add = true;
		} else if (action == 'del') {

		} else if (action == 'edit') {

		}
	}

	// Get and Set of Opc
	public getOpc(): boolean {
		return this.opc;
	}
	public setOpc(newVal) {
		this.opc = newVal;
	}

	public tasks(){
		this.task_service.getTasks().subscribe(
			response => {
				this.tasksArray = response;
				console.log(this.tasksArray);
			},
			reject => {
				console.log(reject);
			}
		);
	}

	public onAdd(e){

	}

}
