export const formatLocaleNumber = (locale: string, value: number) => {
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
		.match(/\d.+/gm);
};
