import { NgClass } from '@angular/common';
import { Component, Input, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavigationItem, navigation } from '../../models/navigation.model';
import { NavigationScrollService } from '../../services/scroll-navigation/navigation-scroll.service';
import { NavigationOverlayComponent } from '../navigation-overlay/navigation-overlay.component';

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
  constructor(
    private navigationScrollService: NavigationScrollService,
    private dialog: MatDialog,
    private renderer: Renderer2
  ) {}

  onNavLinkClick(link: NavigationItem) {
    this.navigationScrollService.navigateAndScroll('', link.route);
  }

  openNavigation() {
    const dialogRef = this.dialog.open(NavigationOverlayComponent, {
      width: '100vw',
      height: '100vh',
      panelClass: 'navigation-dialog-container',
      backdropClass: 'navigation-dialog-backdrop',
    });
    this.renderer.addClass(document.body, 'no-scroll');

    dialogRef.afterClosed().subscribe(() => {
      this.renderer.removeClass(document.body, 'no-scroll');
    });

    dialogRef.componentInstance.close.subscribe(() => {
      dialogRef.close();
    });
  }
}
