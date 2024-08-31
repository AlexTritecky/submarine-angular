import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./pages/home-page/home-page.component').then((m) => m.HomePageComponent),
	},
	{
		path: 'team',
		loadComponent: () => import('./pages/team/team.component').then((m) => m.TeamComponent),
	},
	// {
	// 	path: 'portfolio',
	// 	loadComponent: () =>
	// 		import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent),
	// },

	{
		path: 'cooperation',
		loadComponent: () =>
			import('./pages/mobile-form/mobile-form.component').then((m) => m.MobileFormComponent),
	},
	{
		path: 'services/:id',
		loadComponent: () =>
			import('./pages/mobile-services/mobile-services.component').then((m) => m.MobileServicesComponent),
	},
	{
		path: '**',
		redirectTo: '',
	}
];
