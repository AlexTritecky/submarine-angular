import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NavigationItem, navigation } from '../../models/navigation.model';
import { NavigationScrollService } from '../../services/scroll-navigation/navigation-scroll.service';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

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
    public dialog: MatDialog
  ) {}

  onNavLinkClick(link: NavigationItem) {
    this.navigationScrollService.navigateAndScroll('', link.route);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '901px',
      height: '901px',
      position: { right: '0' },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
