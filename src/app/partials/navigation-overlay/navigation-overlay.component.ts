import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FooterLink, footerSocial } from '../../models/navigation.model';

@Component({
  selector: 'app-navigation-overlay',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './navigation-overlay.component.html',
  styleUrl: './navigation-overlay.component.scss',
})
export class NavigationOverlayComponent {
  public footerLinks: FooterLink[] = footerSocial;
  @Output() close = new EventEmitter<void>();

  closeNavigation() {
    const infoElement = document.querySelector('.navigation-overlay--info');
    const contentElement = document.querySelector(
      '.navigation-overlay--content'
    );

    if (infoElement && contentElement) {
      infoElement.classList.add('animate-slide-up');
      contentElement.classList.add('animate-slide-down');

      const handleAnimationEnd = () => {
        this.close.emit();
        infoElement.removeEventListener('animationend', handleAnimationEnd);
        contentElement.removeEventListener('animationend', handleAnimationEnd);
      };

      infoElement.addEventListener('animationend', handleAnimationEnd);
      contentElement.addEventListener('animationend', handleAnimationEnd);
    } else {
      this.close.emit();
    }
  }
}
