import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ServicePopUpItem } from '../../models/service.model';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-service-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './service-dialog.component.html',
  styleUrl: './service-dialog.component.scss',
})
export class ServiceDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: ServicePopUpItem) {
    console.log('Received data:', this.data);
  }
}
