import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export const SVG_ICONS: { [key: string]: string } = {
	'icon-logo'            : 'assets/icons/icon-logo.svg',
	'icon-navigation'      : 'assets/icons/icon-navigation.svg',
	'icon-plus'            : 'assets/icons/icon-plus.svg',
	'icon-button-plus'     : 'assets/icons/icon-button-plus.svg',
	'icon-arrow-right'     : 'assets/icons/icon-arrow-right.svg',
	'icon-sm-plus'         : 'assets/icons/icon-sm-plus.svg',
	'icon-social-arrow'    : 'assets/icons/icon-social-arrow.svg',
	'icon-left'            : 'assets/icons/icon-left.svg',
	'icon-right'           : 'assets/icons/icon-right.svg',
	'icon-okko'            : 'assets/icons/icon-okko.svg',
	'icon-recover'         : 'assets/icons/icon-recover.svg',
	'icon-rikota'          : 'assets/icons/icon-rikota.svg',
	'icon-okko-logo'       : 'assets/icons/icon-okko-logo.svg',
	'icon-rikota-logo'     : 'assets/icons/icon-rikota-logo.svg',
	'icon-recover-logo'    : 'assets/icons/icon-recover-logo.svg',
	'icon-arrow-footer'    : 'assets/icons/icon-arrow-footer.svg',
	'icon-plus-simple'     : 'assets/icons/icon-plus-simple.svg',
	'icon-circle-arrow'    : 'assets/icons/icon-circle-arrow.svg',
	'icon-p'               : 'assets/icons/icon-p.svg',
	'icon-navigation-close': 'assets/icons/icon-navigation-close.svg',
	'icon-arrow-down'      : 'assets/icons/icon-arrow-down.svg',
	'icon-facebook'        : 'assets/icons/social/icon-facebook.svg',
	'icon-instagram'       : 'assets/icons/social/icon-instagram.svg',
	'icon-linkedin'        : 'assets/icons/social/icon-linkedin.svg',
	'icon-tik-tok'         : 'assets/icons/social/icon-tiktok.svg',
	'icon-up'              : 'assets/icons/icon-up.svg',
	'icon-close-mobile'    : 'assets/icons/icon-close-mob.svg',
	'icon-facebook-w'      : 'assets/icons/social/icon-facebook-w.svg',
	'icon-instagram-w'     : 'assets/icons/social/icon-instagram-w.svg',
	'icon-linkedin-w'      : 'assets/icons/social/icon-linkedin-w.svg',
	'icon-tik-tok-w'       : 'assets/icons/social/icon-tiktok-w.svg',
	'icon-gray-arrow'      : 'assets/icons/icon-arrow-circle-gray.svg',
	'icon-b-circle'        : 'assets/icons/icon-circle.svg',
	'icon-okko-title'      : 'assets/icons/cases/okko-title.svg',
	'icon-recover-title'   : 'assets/icons/cases/recover-title.svg'
};

@Injectable({
	providedIn: 'root',
})
export class SvgRegisterService {
	constructor(
		private readonly iconRegistry: MatIconRegistry,
		private readonly sanitizer: DomSanitizer,
	) {}

	public registerSvg(): void {
		Object.keys(SVG_ICONS).forEach((key) => {
			this.iconRegistry.addSvgIcon(
				key,
				this.sanitizer.bypassSecurityTrustResourceUrl(SVG_ICONS[key]),
			);
		});
	}
}
