import { Component } from '@angular/core';
import { CarouselItem, carouselItems } from '../../models/carousel.model';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items: CarouselItem[] = carouselItems.sort((a, b) => a.order - b.order);
  constructor() {}
}
