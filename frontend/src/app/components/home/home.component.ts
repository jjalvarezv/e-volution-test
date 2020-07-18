import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private opc: boolean;

	constructor() {
		this.opc = false;
	}

	ngOnInit(): void {
	}

	public showModal() {
		this.opc = true;
	}

	// Get and Set of Opc
	public getOpc(): boolean {
		return this.opc;
	}
	public setOpc(newVal) {
		this.opc = newVal;
	}

}
