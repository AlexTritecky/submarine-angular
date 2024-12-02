import { AfterViewInit, Component, ElementRef, inject, Renderer2 } from '@angular/core';
import { HeaderComponent } from '../../partials/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { StateService } from '../../services/state/state.service';
import { NgFor, NgStyle } from '@angular/common';

@Component({
	selector: 'app-cases-global-page',
	standalone: true,
	imports: [HeaderComponent, MatIconModule, NgStyle, NgFor],
	templateUrl: './cases-global-page.component.html',
	styleUrl: './cases-global-page.component.scss'
})
export class CasesGlobalPageComponent implements AfterViewInit {

	private readonly router = inject(Router);
	private readonly state = inject(StateService);
	private readonly renderer = inject(Renderer2);
	private readonly elementRef = inject(ElementRef);

	videos = [
		{ src: 'assets/videos/case-1.MP4', muted: true },
		{ src: 'assets/videos/case-2.MP4', muted: true },
		{ src: 'assets/videos/case-3.MP4', muted: true },
		{ src: 'assets/videos/case-4.MP4', muted: true },
		{ src: 'assets/videos/case-5.MP4', muted: true },
		{ src: 'assets/videos/case-6.MP4', muted: true },
		{ src: 'assets/videos/case-7.MP4', muted: true },
		{ src: 'assets/videos/case-8.MP4', muted: true },
		{ src: 'assets/videos/case-9.MP4', muted: true },
		{ src: 'assets/videos/case-10.MP4', muted: true },
		{ src: 'assets/videos/case-11.MP4', muted: true },
	];
	activeIndex = 0;
	angle = 0;
	rotationStep = 45; // Smaller steps for tighter positioning
	translateZ = 250; // Adjust for card depth positioning
	private startX = 0;
	private endX = 0;

	constructor() { }

	ngAfterViewInit(): void {
		const container = this.elementRef.nativeElement.querySelector(
			'.mobile-carousel'
		);

		// Attach touch events
		this.renderer.listen(container, 'touchstart', (event: TouchEvent) => {
			this.startX = event.touches[0].clientX;
		});

		this.renderer.listen(container, 'touchmove', (event: TouchEvent) => {
			this.endX = event.touches[0].clientX;
		});

		this.renderer.listen(container, 'touchend', () => {
			this.handleSwipe();
		});
	}

	handleSwipe(): void {
		const swipeDistance = this.endX - this.startX;

		if (Math.abs(swipeDistance) > 50) {
			if (swipeDistance < 0) {
				this.next(); // Swipe left
			} else {
				this.prev(); // Swipe right
			}
		}

		// Reset swipe positions
		this.startX = 0;
		this.endX = 0;
	}

	routeToMain(): void {
		this.router.navigate(['/']);
	}

	openDialog(): void {
		this.state.openStateDialog();
	}

	next() {
		this.updateVideoState();
		this.activeIndex = (this.activeIndex + 1) % this.videos.length;
		this.angle -= this.rotationStep;
		this.updateActiveVideo();
	}

	prev() {
		this.updateVideoState();
		this.activeIndex =
			(this.activeIndex - 1 + this.videos.length) % this.videos.length;
		this.angle += this.rotationStep;
		this.updateActiveVideo();
	}

	onVideoLoad(event: Event) {
		const video = event.target as HTMLVideoElement;
		if (this.videos[this.activeIndex].src === video.src) {
			video.play();
		}
	}

	toggleMute(index: number) {
		this.videos[index].muted = !this.videos[index].muted;
		const videoElement = document.querySelectorAll('video')[index];
		if (videoElement) {
			videoElement.muted = this.videos[index].muted;
		}
	}

	updateActiveVideo() {
		const videos = document.querySelectorAll('video');
		videos.forEach((video, index) => {
			if (index === this.activeIndex) {
				video.play();
				video.muted = this.videos[index].muted;
			} else {
				video.pause();
				video.currentTime = 0;
				this.videos[index].muted = true; // Reset mute state for inactive videos
			}
		});
	}

	updateVideoState() {
		const activeVideo = document.querySelectorAll('video')[this.activeIndex];
		if (activeVideo) {
			activeVideo.pause();
			activeVideo.currentTime = 0;
		}
		this.videos.forEach(video => (video.muted = true)); // Reset mute state globally
	}
}
