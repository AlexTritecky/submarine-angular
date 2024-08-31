import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
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
import { isPlatformBrowser } from '@angular/common';
import { LazyLoadDirective } from '../../lazy-load.directive';
import { HomeCooperationMobileComponent } from '../../partials/home-cooperation-mobile/home-cooperation-mobile.component';
import { Router } from '@angular/router';
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
		LoaderComponent,
		LazyLoadDirective,
		HomeCooperationMobileComponent,
	],
	providers: [StateService],
	templateUrl: './home-page.component.html',
	styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
	isLoading = true;

	constructor(
		public dialog: MatDialog,
		private state: StateService,
		private renderer: Renderer2,
		private router: Router,
		@Inject(PLATFORM_ID) private platformId: Object,
	) {}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.loadBackgroundImage();
		}
	}

	loadBackgroundImage() {
		const backgroundImage = this.renderer.createElement('img');
		this.renderer.setAttribute(backgroundImage, 'src', '/assets/images/hero-bg.webp');
		backgroundImage
			.decode()
			.then(() => {
				this.isLoading = false;
			})
			.catch(() => {
				this.isLoading = true;
			});
	}

	openDialog(): void {
		this.state.openStateDialog();
	}

	openServiceDialog(id: ServiceType): void {
		this.state.openServiceDialog(id);
	}

	routeToForm(): void {
		this.router.navigate(['/cooperation']);
	}
}
