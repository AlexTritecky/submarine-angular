import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceType } from '../../models/service.model';
import { StateService } from '../../services/state/state.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-home-services',
	standalone: true,
	imports: [MatIconModule],
	templateUrl: './home-services.component.html',
	styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {
	types = ServiceType;
	constructor(
		public dialog: MatDialog,
		private state: StateService,
	) {}

	openServiceDialog(id: ServiceType): void {
		this.state.openServiceDialog(id);
	}

	openDialog(): void {
		this.state.openStateDialog();
	}
}
