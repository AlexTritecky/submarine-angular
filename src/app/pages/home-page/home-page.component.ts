import { Component } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { CarouselComponent } from '../../partials/carousel/carousel.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { StateService } from '../../services/state/state.service';
import { ServiceType } from '../../models/service.model';
import { LoaderComponent } from '../../partials/loader/loader.component';
import { HomeInfoComponent } from '../../partials/home-info/home-info.component';
import { HomeServicesComponent } from '../../partials/home-services/home-services.component';
import { HomeCasesComponent } from '../../partials/home-cases/home-cases.component';
import { HomeCooperationComponent } from '../../partials/home-cooperation/home-cooperation.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    MatIconModule,
    CarouselComponent,
    MatDialogModule,
    LoaderComponent,
    HomeInfoComponent,
    HomeServicesComponent,
    HomeCasesComponent,
    HomeCooperationComponent,
  ],
  providers: [StateService],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  constructor(
    public dialog: MatDialog,
    private state: StateService,
  ) {}

  openDialog(): void {
    this.state.openStateDialog();
  }

  openServiceDialog(id: ServiceType): void {
    this.state.openServiceDialog(id);
  }
}
