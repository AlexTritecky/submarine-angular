import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../partials/header/header.component';
import { CarouselItem, portfolioCarouselItems } from '../../models/carousel.model';

@Component({
	selector: 'app-portfolio',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, MatDialogModule, NgStyle, NgFor],
	templateUrl: './portfolio.component.html',
	styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
	items: CarouselItem[] = portfolioCarouselItems.sort((a, b) => a.order - b.order);
}
