import { Locale } from '@/config/localeConfig';

export const formatLocaleNumber = (locale: Locale, value: number) => {
	const currencyLocale: Record<string, string> = {
		en: 'USD',
		ru: 'RUB',
	};

	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: currencyLocale[locale],
		currencyDisplay: 'code',
	})
		.format(value)
		.match(/\d.+\d/gm);
};
