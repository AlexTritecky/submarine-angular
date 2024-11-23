import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';

@Component({
	selector: 'app-cases-global-page',
	standalone: true,
	imports: [HeaderComponent, MatIconModule],
	templateUrl: './cases-global-page.component.html',
	styleUrl: './cases-global-page.component.scss'
})
export class CasesGlobalPageComponent {

	private readonly router = inject( Router);
	private readonly state  = inject( StateService );

	constructor() { }


	routeToForm(): void {
		this.router.navigate(['/cooperation']);
	}

	openDialog(): void {
		this.state.openStateDialog();
	}
}
