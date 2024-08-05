import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../../partials/header/header.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselItem, portfolioCarouselItems } from '../../models/carousel.model';

@Component({
	selector: 'app-portfolio',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, MatDialogModule, CarouselModule, NgStyle, NgFor],
	templateUrl: './portfolio.component.html',
	styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
	items: CarouselItem[] = portfolioCarouselItems.sort((a, b) => a.order - b.order);

	customOptions: OwlOptions = {
		items: 1,
		loop: true,
		autoplay: false,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		mouseDrag: false,
		touchDrag: false,
		pullDrag: false,
		dots: true,
		dotsData: true,
		startPosition: 0,
		navSpeed: 700,
		responsive: {
			0: {
				items: 1,
			},
			400: {
				items: 1,
			},
			740: {
				items: 1,
			},
			940: {
				items: 1,
			},
		},
		nav: false,
	};
}
