import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationScrollService {
  constructor(private router: Router) {}

  navigateAndScroll(route: string, fragment: string) {
    if (this.router.url !== `/${route}`) {
      this.router.navigate([`/${route}`]).then(() => {
        this.scrollToFragment(fragment);
      });
    } else {
      this.scrollToFragment(fragment);
    }
  }

  private scrollToFragment(fragment: string) {
    setTimeout(() => {
      const element = document.querySelector(`#${fragment}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
