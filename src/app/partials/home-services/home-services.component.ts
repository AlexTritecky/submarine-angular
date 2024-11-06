import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { serviceCards, ServiceType } from '../../models/service.model';
import { StateService } from '../../services/state/state.service';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgClass, NgFor } from '@angular/common';

@Component({
	selector: 'app-home-services',
	standalone: true,
	imports: [MatIconModule, NgClass, NgFor],
	templateUrl: './home-services.component.html',
	styleUrl: './home-services.component.scss',
})
export class HomeServicesComponent {
	types = ServiceType;
	cards = serviceCards;

	constructor(
		public dialog: MatDialog,
		private state: StateService,
		private breakpointObserver: BreakpointObserver,
		private router: Router,
	) {}

	openServiceDialog(id: ServiceType): void {
		this.breakpointObserver
			.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
			.subscribe((result) => {
				if (!result.matches) {
					// If the screen size is 1024px or more, navigate to the route
					this.router.navigate(['/services', id]);
				} else {
					// Otherwise, open the dialog
					this.state.openServiceDialog(id);
				}
			});
	}

	openDialog(): void {
		this.state.openStateDialog();
	}

	routeToForm(): void {
		this.router.navigate(['/cooperation']);
	}
}
