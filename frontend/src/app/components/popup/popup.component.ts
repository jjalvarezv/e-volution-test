import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-popup',
	templateUrl: './popup.component.html',
	styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

	@Input() private visible: boolean;
	@Output() private close: EventEmitter<boolean> = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}

	public closeModal() {
		this.close.emit(false);
	}

	public getVisible(): boolean {
		return this.visible;
	}

}
