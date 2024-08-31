import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
	PreloadAllModules,
	provideRouter,
	withInMemoryScrolling,
	withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { svgRegistrationProvider } from './providers/svg-registration.provider';


export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, withPreloading(PreloadAllModules), withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled'})),
		provideClientHydration(),
		provideAnimationsAsync(),
		provideHttpClient(withFetch()),
		svgRegistrationProvider,
	],
};
