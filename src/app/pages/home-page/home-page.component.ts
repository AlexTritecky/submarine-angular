import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from '../../partials/carousel/carousel.component';
import { ContactDialogComponent } from '../../partials/contact-dialog/contact-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StateService } from '../../services/state/state.service';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, MatIconModule, CarouselComponent, MatDialogModule],
  providers: [StateService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(public dialog: MatDialog, private state: StateService) {}

  openDialog(): void {
    this.state.openStateDialog();
  }
}
