import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from '../../partials/carousel/carousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
