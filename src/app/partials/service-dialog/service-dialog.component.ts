import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ServicePopUpItem, ServiceType } from '../../models/service.model';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';

@Component({
	selector: 'app-service-dialog',
	standalone: true,
	imports: [MatDialogModule, MatIconModule, MatExpansionModule, MatAccordion],
	templateUrl: './service-dialog.component.html',
	styleUrl: './service-dialog.component.scss',
})
export class ServiceDialogComponent {
	types = ServiceType;
	dataItems!: ServicePopUpItem[];
	dataItem!: ServicePopUpItem;
	constructor(@Inject(MAT_DIALOG_DATA) public data: ServicePopUpItem[], private router: Router) {
		if (data.length === 1) {
			this.dataItem = data[0];
		} else {
			this.dataItems = data;
		}
	}

	allIdsAreBranding(): boolean {
		if (!this.dataItems) return false;
		return this.dataItems.every((item) => item.id === ServiceType.BRENDING);
	}
}
