import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from '../../partials/carousel/carousel.component';
import { ContactDialogComponent } from '../../partials/contact-dialog/contact-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmailService } from '../../services/email/email.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, CarouselComponent, MatDialogModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(public dialog: MatDialog, private emailService: EmailService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '901px',
      height: '901px',
      position: { right: '0' },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
    });
  }
}
