import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { TeamMember, teamMembers } from '../../models/team.model';
import { isPlatformBrowser, NgClass, NgStyle } from '@angular/common';
import { LoaderComponent } from '../../partials/loader/loader.component';

@Component({
	selector: 'app-team',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, MatDialogModule, NgStyle, LoaderComponent, NgClass],
	templateUrl: './team.component.html',
	styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
	teams: TeamMember[] = teamMembers;
	isLoading = true;
	readonly memberlink = 'https://t.me/SUBMARINETEAM';
	toggledId: number | null = null; // Keep track of the currently toggled ID

	constructor(
		private renderer: Renderer2,
		@Inject(PLATFORM_ID) private platformId: Object,
	) {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
	}

	ngOnInit() {
		if (isPlatformBrowser(this.platformId)) {
			this.loadBackgroundImage();
		}
	}

	loadBackgroundImage() {
		const backgroundImage = this.renderer.createElement('img');
		this.renderer.setAttribute(backgroundImage, 'src', '/assets/images/hero-bg.webp');

		this.renderer.listen(backgroundImage, 'load', () => {
			// Background image is loaded, now load the team images
			this.loadTeamImages();
		});

		this.renderer.listen(backgroundImage, 'error', () => {
			// Handle background image loading error if needed
			this.loadTeamImages(); // Continue loading other images even if background fails
		});
	}

	loadTeamImages() {
		const totalImages = this.teams.length;
		let loadedImages = 0;

		this.teams.forEach((team) => {
			const img = this.renderer.createElement('img');
			this.renderer.setAttribute(img, 'src', team.image);

			this.renderer.listen(img, 'load', () => {
				loadedImages++;
				if (loadedImages === totalImages) {
					this.isLoading = false;
				}
			});

			this.renderer.listen(img, 'error', () => {
				loadedImages++;
				if (loadedImages === totalImages) {
					this.isLoading = false;
				}
			});
		});
	}

	becameMember() {
		window.open(this.memberlink, '_blank');
	}

	toggleImage(id: number) {
    this.toggledId = this.toggledId === id ? null : id; // Toggle or reset the ID
  }
}
