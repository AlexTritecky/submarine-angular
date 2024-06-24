import { Component } from '@angular/core';
import { CarouselItem, carouselItems } from '../../models/carousel.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items: CarouselItem[] = carouselItems;
  constructor() {}
}
