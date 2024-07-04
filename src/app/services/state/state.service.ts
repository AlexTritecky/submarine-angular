import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../partials/contact-dialog/contact-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor(public dialog: MatDialog) {}

  openStateDialog(): void {
    const dialogRef = this.dialog.open(ContactDialogComponent, {
      width: '901px',
      height: '901px',
      position: { right: '0' },
      panelClass: 'contact-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
