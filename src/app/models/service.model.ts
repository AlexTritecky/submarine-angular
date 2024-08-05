export interface ServicePopUpItem {
	days: string;
	image_desktop: string;
	roles: string[];
	title: string;
	properties: string[];
	id: ServiceType;

	small_logo?: string;
	sub_title_1?: string;
	sub_title_2?: string;
	properties_2?: string[];
	sub_properties?: string[];
	sub_type?: SubServiceType;
	title_2?: string;
	small_title?: string;
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

export enum SubServiceType {
	NAMING = 'naming',
	LOGO_BOOK = 'logo_book',
	BRAND_BOOK = 'brand_book',
}

export const servicePopUpItems: ServicePopUpItem[] = [
	// SMM STRATEGY
	{
		days: '30',
		image_desktop: 'assets/images/services/smm_strategy_desktop.webp',
		id: ServiceType.SMM_STRATEGIYA,
		roles: ['стратег', 'дизайнер', 'копірайтер', 'сторіс-дизайнер'],
		title: 'SMM-СТРАТЕГІЯ',
		properties: [
			'Аналіз проробленої роботи',
			'Визначення цілей просування',
			'Аналіз ЦА і релевантного контенту під неї',
			'Аналіз діяльності конкурентів в соц.мережах та їх позиціонування',
			'Визначення майданчиків та аналіз форматів',
			'Архетипування та TOV',
			'Розробка позиціонування в соціальних мережах',
			'Розробка унікального рубрикатору',
			'Розробка 2-х альтернативних візуальних концепцій',
			'Розробка оформлення сторінок',
			'Ідеї колаборацій з брендами  інфлуенсерами',
			'Мудборд фотосесії',
			'Таймлайн',
		],
	},
	// COMMUNICATION STRATEGY
	{
		days: '60',
		image_desktop: 'assets/images/services/communication_strategy_pop_up_desktop.webp',
		id: ServiceType.COMUNIKATSIYNA_STRATEGIYA,
		roles: ['стратег', 'дизайнер', 'копірайтер'],
		title: 'КОМУНІКАЦІЙНА СТРАТЕГІЯ',
		sub_title_1: 'ПЕРШИЙ МІСЯЦЬ',
		properties: [
			'Аналіз середовища',
			'Кількісне дослідження',
			'Глибинне дослідження',
			'Визначення бар’єрів',
			'Аналіз шляху клієнта',
			'Аналіз цільової аудиторії',
			'Аналіз попередньої діяльності',
			'Аналіз конкурентів',
			'SWOT- аналіз',
		],
		sub_title_2: 'ДРУГИЙ МІСЯЦЬ',
		properties_2: [
			'Визначення позиціонування',
			'Архетипізація',
			'Емоціо та Раціо бренду',
			'TOV та меседжі',
			'Архетипізація',
			'KEY Visual',
			'KEY-massage',
			'Ідеї для рекламних роликів',
			'Ідеї для рубрик у соціальних мережах',
			'Promotion - ідеї :',
		],
		sub_properties: [
			'Точки контакту',
			'Соціальна відповідальність',
			'Колаборації',
			' Медіа',
			'Події та заходи',
			' Власні продукти',
		],
	},
	// Neiming
	{
		days: '14',
		image_desktop: 'assets/images/services/branding_pop_up_desktop_1.webp',
		id: ServiceType.BRENDING,
		sub_type: SubServiceType.NAMING,
		roles: ['стратег', 'копірайтер'],
		title: 'НЕЙМІНГ',
		small_title: 'неймінг',
		properties: [
			'Брифінг (1 год)',
			'Розробка 10 унікальних варіантів неймінгу з доступними доменами',
		],
	},

	// LOGO BOOK
	{
		days: '20',
		image_desktop: 'assets/images/services/branding_pop_up_desktop_2.webp',
		id: ServiceType.BRENDING,
		sub_type: SubServiceType.LOGO_BOOK,
		roles: ['стратег', 'дизайнер'],
		title: 'ЛОГОБУК',
		small_title: 'логобук',
		properties: [
			'Розробка 5 концепцій лого',
			'Оформлення логобуку з обраним концептом',
			'Інструкція та правила використання логотипу',
		],
	},

	// BRAND BOOK
	{
		days: '30',
		image_desktop: 'assets/images/services/branding_pop_up_desktop_3.webp',
		id: ServiceType.BRENDING,
		sub_type: SubServiceType.BRAND_BOOK,
		roles: ['стратег', 'дизайнер'],
		title: 'БРЕНДБУК',
		small_title: 'брендбук',
		properties: [
			'4 концепти айдентики та лого',
			'10 бренд-елементів (макапів)',
			'5 макетів з обраних бренд-елементів',
			'Формування бренд-буку (лого, шрифти,фірмові елементи, прототипи дизайну, брендування соціальних мереж)',
			'Гайд ( інструкція з використання)',
		],
	},

	// WEB DESIGN
	{
		days: '14 - 30',
		image_desktop: 'assets/images/services/web-design_pop_up_desktop.webp',
		id: ServiceType.WEB_DESIGN,
		roles: ['копірайтер', 'дизайнер', 'веб-розробник'],
		title: 'UI/UX ДИЗАЙН ТА РОЗРОБКА ВЕБ-САЙТІВ',
		properties: [
			'Брифування (1 год)',
			'Створення мудборду',
			'Розробка UI прототипів та карти сайту ',
			'Фіналізуємо дизайн',
			'Верстка та розробка веб-сторінок',
			'Тестування',
			'Запуск сайту',
		],
	},

	// PROMOTION
	{
		days: '30',
		image_desktop: 'assets/images/services/promotion_pop_up_desktop.webp',
		id: ServiceType.PROMOTION,
		roles: ['контент-менеджер', 'копірайтер'],
		title: 'СПІВПРАЦЯ З МЕДІА',
		title_2: 'СПІВПРАЦЯ З ІНФЛУЕНСЕРАМИ',
		properties: [
			'Створення карти медіа',
			'План тем для прес-релізів',
			'Комунікація з медіа',
			'Прес-реліз',
		],
		properties_2: [
			'Створення карти Інфлуенсерів',
			'План тем для колаборацій',
			'Комунікація з блогерами',
		],
	},

	// PRODUCTION
	{
		days: '10',
		image_desktop: 'assets/images/services/production_desktop.webp',
		id: ServiceType.PRODUCTION,
		roles: ['арт-директор', 'відеооператор', 'контент-менеджер', 'фотограф'],
		title: 'ФОТОЗЙОМКА',
		properties: [
			'Підготовка кошторису, таймінгів, розкадровки та плану зйомки',
			'Предметна фотозйомка',
			'Іміджева фотозйомка',
			'Командна фотозйомка',
			'Фотозйомка локації, інтер’єру та екстер’єру',
			'Зйомка Reels',
		],
	},
	// SMM SUPROVID
	{
		days: '30',
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
