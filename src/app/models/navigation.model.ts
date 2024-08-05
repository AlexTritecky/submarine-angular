export interface NavigationItem {
	title: string;
	route: string;
	scroll?: string;
	openForm?: boolean;
}

export const navigation: NavigationItem[] = [
	{
		title: 'Про нас',
		route: 'about-us',
	},
	{
		title: 'Послуги',
		route: 'services',
	},
	{
		title: 'Клієнти',
		route: 'clients',
	},
	{
		title: 'Портфоліо',
		route: 'portfolio',
	},
	{
		title: 'Співпраця',
		route: 'cooperation',
	},
];

export const navOverlayLinks: NavigationItem[] = [
	{
		title: 'Домашня сторінка',
		route: '',
	},
	{
		title: 'Про нас',
		route: '',
		scroll: 'about-us',
	},
	{
		title: 'Послуги',
		route: '',
		scroll: 'services',
	},
	{
		title: 'Портфоліо',
		route: 'portfolio',
	},
	{
		title: 'Клієнти',
		route: '',
		scroll: 'clients',
	},
	{
		title: 'Співпраця',
		route: '',
		scroll: 'cooperation',
	},
	{
		title: 'Команда',
		route: 'team',
	},
	{
		title: 'Написати нам',
		route: '',
		openForm: true,
	},
];

export interface FooterLink {
	label: string;
	route: string;
}

export const footerSocial: FooterLink[] = [
	{
		label: 'instagram',
		route: 'https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D',
	},
	{
		label: 'linkedin',
		route: 'https://ua.linkedin.com/company/submarine-agency-ua',
	},
	{
		label: 'tik tok',
		route: 'https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1',
	},
	{
		label: 'facebook',
		route: 'https://m.facebook.com/submarineagency',
	},
];
