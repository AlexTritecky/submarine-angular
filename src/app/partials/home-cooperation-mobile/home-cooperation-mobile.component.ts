import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-home-cooperation-mobile',
	standalone: true,
	imports: [MatIconModule],
	templateUrl: './home-cooperation-mobile.component.html',
	styleUrl: './home-cooperation-mobile.component.scss',
})
export class HomeCooperationMobileComponent {
	readonly eventOpenDialog = output<void>();
}
