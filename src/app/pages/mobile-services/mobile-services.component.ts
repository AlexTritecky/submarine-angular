import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { StateService } from '../../services/state/state.service';
import { ServicePopUpItem, ServiceType } from '../../models/service.model';
import { ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
	selector: 'app-mobile-services',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, MatExpansionModule, MatAccordion],
	templateUrl: './mobile-services.component.html',
	styleUrl: './mobile-services.component.scss',
})
export class MobileServicesComponent {

	private readonly state = inject(StateService);
	private readonly activeRouter = inject(ActivatedRoute);


	dataItem!: ServicePopUpItem[];
	types = ServiceType;

	constructor(
	) {
		this.activeRouter.params.subscribe((params) => {
			this.dataItem = this.state.getServiceById(params['id']);
		});

		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}
}
