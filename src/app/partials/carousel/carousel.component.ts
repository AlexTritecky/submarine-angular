import { Component } from '@angular/core';
import { CarouselItem, carouselItems } from '../../models/carousel.model';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgStyle } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule, NgStyle, CarouselModule, NgFor],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  items: CarouselItem[] = carouselItems.sort((a, b) => a.order - b.order);

  customOptions: OwlOptions = {
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,

    dots: false,
    startPosition: 0,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  };
  constructor() {}
}
