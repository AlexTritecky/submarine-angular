import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appLazyLoad]',
	standalone: true,
})
export class LazyLoadDirective implements OnInit, OnDestroy {
	@Input('lazyLoad') elementToLoad!: HTMLElement;
	private observer!: IntersectionObserver;

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {}

	ngOnInit() {
		this.initIntersectionObserver();
	}

	initIntersectionObserver() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.1,
		};

		this.observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					this.loadElement();
					this.observer.disconnect();
				}
			});
		}, options);

		this.observer.observe(this.el.nativeElement);
	}

	loadElement() {
		this.renderer.appendChild(this.el.nativeElement, this.elementToLoad);
	}

	ngOnDestroy() {
		if (this.observer) {
			this.observer.disconnect();
		}
	}
}
