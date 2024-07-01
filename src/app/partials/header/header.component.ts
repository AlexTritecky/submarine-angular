import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { NavigationItem, navigation } from '../../models/navigation.model';
import { NavigationScrollService } from '../../services/scroll-navigation/navigation-scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatIconModule, NgClass, MatDialogModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isViewing: boolean = true;

  navLinks: NavigationItem[] = navigation;
  constructor(private navigationScrollService: NavigationScrollService) {}

  onNavLinkClick(link: NavigationItem) {
    this.navigationScrollService.navigateAndScroll('', link.route);
  }

  openNavigation() {}
}
