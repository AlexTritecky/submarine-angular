import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from '../../partials/contact-dialog/contact-dialog.component';
import { servicePopUpItems, ServiceType } from '../../models/service.model';
import { ServiceDialogComponent } from '../../partials/service-dialog/service-dialog.component';

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

  openServiceDialog(id: ServiceType): void {
    const dataDialog = servicePopUpItems.filter((item) => item.id === id);
    if (!dataDialog) return console.error('Service not found');

    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '1128px',
      height: '748px',
      panelClass: 'service-dialog-container',
      data: dataDialog,
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
