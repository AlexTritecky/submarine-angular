export interface NavigationItem {
	title: string;
	route: string;
	scroll?: string;
	openForm?: boolean;
	mobileRoute?: string;
}

export const navigation: NavigationItem[] = [
	{
		title: 'Про нас',
		route: 'about-us',
		scroll: 'about-us',
	},
	{
		title: 'Послуги',
		route: 'services',
		scroll: 'services',
	},
	{
		title: 'Клієнти',
		route: 'clients',
		scroll: 'clients',
	},
	{
		title: 'Портфоліо',
		route: 'portfolio',
	},
	{
		title: 'Співпраця',
		route: 'cooperation',
		scroll: 'cooperation',
	},
];

export const navOverlayLinks: NavigationItem[] = [
	{
		title: 'Домашня сторінка',
		route: '/',
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
		mobileRoute: 'cooperation',
	},
];

export const navMobileLinks: NavigationItem[] = [
	{
		title: 'Домашня сторінка',
		route: '/',
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
		route: 'cooperation',
		openForm: false,
	},
];

export interface FooterLink {
	label: string;
	route: string;
	icon: string;
	icon_w: string;
}

export const footerSocial: FooterLink[] = [
	{
		label: 'instagram',
		route: 'https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D',
		icon: 'icon-instagram',
		icon_w: 'icon-instagram-w',
	},
	{
		label: 'linkedin',
		route: 'https://ua.linkedin.com/company/submarine-agency-ua',
		icon: 'icon-linkedin',
		icon_w: 'icon-linkedin-w',
	},
	{
		label: 'tik tok',
		route: 'https://www.tiktok.com/@submarineua?_t=8jA67dMjF81&_r=1',
		icon: 'icon-tik-tok',
		icon_w: 'icon-tik-tok-w',
	},
	{
		label: 'facebook',
		route: 'https://m.facebook.com/submarineagency',
		icon: 'icon-facebook',
		icon_w: 'icon-facebook-w',
	},
];
