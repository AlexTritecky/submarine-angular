import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

export const SVG_ICONS: { [key: string]: string } = {
  'icon-logo': 'assets/icons/icon-logo.svg',
  'icon-navigation': 'assets/icons/icon-navigation.svg',
  'icon-plus': 'assets/icons/icon-plus.svg',
  'icon-button-plus': 'assets/icons/icon-button-plus.svg',
  'icon-arrow-right': 'assets/icons/icon-arrow-right.svg',
  'icon-sm-plus': 'assets/icons/icon-sm-plus.svg',
  'icon-social-arrow': 'assets/icons/icon-social-arrow.svg',
};

@Injectable({
  providedIn: 'root',
})
export class SvgRegisterService {
  constructor(private readonly iconRegistry: MatIconRegistry, private readonly sanitizer: DomSanitizer) {}

  public registerSvg(): void {
    Object.keys(SVG_ICONS).forEach((key) => {
      this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(SVG_ICONS[key]));
    });
  }
}
