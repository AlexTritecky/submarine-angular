export interface NavigationItem {
  title: string;
  route: string;
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

export interface FooterLink {
  label: string;
  route: string;
}

export const footerSocial: FooterLink[] = [
  {
    label: 'instagram',
    route:
      'https://www.instagram.com/submarine_agency/?igsh=MXJtd2J0ZWczaHhpcw%3D%3D',
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
