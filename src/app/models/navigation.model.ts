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
