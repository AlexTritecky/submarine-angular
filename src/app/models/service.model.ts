export interface ServicePopUpItem {
  days: number;
  image_desktop: string;
  roles: string[];
  title: string;
  properties: string[];
  id: ServiceType;
  small_logo?: string;
}

export enum ServiceType {
  SMM_SUPROVID = 'smm_suprovid',
  COMUNIKATSIYNA_STRATEGIYA = 'comunikatsiyna_strategiya',
  SMM_STRATEGIYA = 'smm_strategiya',
  BRENDING = 'brending',
  PRODUCTION = 'production',
  PROMOTION = 'promotion',
  WEB_DESIGN = 'web_design',
}

export const servicePopUpItems: ServicePopUpItem[] = [
  {
    days: 30,
    image_desktop: 'assets/images/services/smm_pop_up_desktop.webp',
    id: ServiceType.SMM_SUPROVID,
    roles: ['копірайтер', 'сторіс-менеджер', 'дизайнер', 'контент-менеджер'],
    title: 'SMM СУПРОВІД',
    properties: [
      'Створення редакційного плану',
      'Створення візуалів',
      'Текстова частина публікації',
      'Оформлення та публікація stories',
      'Оформлення та публікація reels',
      'Модерація сторінки',
      'Проведення активацій',
    ],
  },
];
