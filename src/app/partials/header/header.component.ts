import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { NavigationItem, navigation } from '../../models/navigation.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isViewing: boolean = true;

  navLinks: NavigationItem[] = navigation;
}
