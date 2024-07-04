import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { FooterLink, footerSocial } from '../../models/navigation.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, MatIconModule, NgClass, MatDialogModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public footerLinks: FooterLink[] = footerSocial;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '901px',
      height: '901px',
      position: { right: '0' },
      panelClass: 'contact-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
