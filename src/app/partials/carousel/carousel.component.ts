import { Component } from '@angular/core';
import { CarouselItem, carouselItems } from '../../models/carousel.model';
import { MatIconModule } from '@angular/material/icon';
import { NgStyle } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatIconModule, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  items: CarouselItem[] = carouselItems;
  constructor() {}

  currentStartIndex = 0;
  itemsToShow = 5;

  get visibleItems() {
    return this.items.slice(this.currentStartIndex, this.currentStartIndex + this.itemsToShow);
  }

  next() {
    if (this.currentStartIndex + this.itemsToShow < this.items.length) {
      this.currentStartIndex++;
    } else {
      this.currentStartIndex = 0;
    }
  }

  prev() {
    if (this.currentStartIndex > 0) {
      this.currentStartIndex--;
    } else {
      this.currentStartIndex = this.items.length - this.itemsToShow;
    }
  }
}
