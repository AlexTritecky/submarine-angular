import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';
import {
	FooterLink,
	NavigationItem,
	footerSocial,
	navMobileLinks,
	navOverlayLinks,
	navigation,
} from '../../models/navigation.model';
import { NavigationScrollService } from '../../services/scroll-navigation/navigation-scroll.service';
import { StateService } from '../../services/state/state.service';

@Component({
	selector: 'app-header',
	standalone: true,
	imports: [RouterLink, MatIconModule, NgClass],
	templateUrl: './header.component.html',
	styleUrl: './header.component.scss',
})
export class HeaderComponent {
	@Input() isViewing: boolean = true;

	public navigationOpen: boolean = false;
	public overlayBlackClass: string = '';
	public overlayWhiteClass: string = '';

	public footerLinks: FooterLink[] = footerSocial;
	public navLinks: NavigationItem[] = navigation;
	public navOverlayLinks: NavigationItem[] = navOverlayLinks;
	public navMobileLinks: NavigationItem[] = navMobileLinks;
	public navItems: NavigationItem[] = [];

	constructor(
		private navigationScrollService: NavigationScrollService,
		private state: StateService,
		private router: Router,
	) {}

	onNavLinkClick(link: NavigationItem) {
		if (link.scroll) {
			this.navigationScrollService.navigateAndScroll('', link.scroll);
		} else {
			this.router.navigate([link.route]);
		}
	}

	onOverlayLinkClick(link: NavigationItem) {
		if (link.scroll) {
			this.navigationScrollService.navigateAndScroll(link.route, link.scroll);
			this.closeNavigation();
		}

		if (link.openForm) {
			this.state.openStateDialog();
			this.closeNavigation();
		}

		if (link.route) {
			this.router.navigate([link.route]);
			this.closeNavigation();
		}
	}

	openNavigation() {
		this.navigationOpen = true;
		this.overlayBlackClass = 'fade-in-down';
		this.overlayWhiteClass = 'fade-in-up';
	}

	closeNavigation() {
		this.overlayBlackClass = 'fade-out-up';
		this.overlayWhiteClass = 'fade-out-down';
		setTimeout(() => {
			this.navigationOpen = false;
			this.overlayBlackClass = '';
			this.overlayWhiteClass = '';
		}, 500); // match this with the animation duration
	}
}
