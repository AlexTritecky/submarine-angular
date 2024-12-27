import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-home-cooperation',
	standalone: true,
	imports: [MatIconModule],
	templateUrl: './home-cooperation.component.html',
	styleUrl: './home-cooperation.component.scss',
})
export class HomeCooperationComponent {

	readonly eventOpenDialog = output<void>();
}
