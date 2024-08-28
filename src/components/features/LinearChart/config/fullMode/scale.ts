import type { ScriptableScaleContext } from 'chart.js';
import { Locale as LocaleFormatter, enUS, ru } from 'date-fns/locale';

import { Locale } from '@/shared/config/localeConfig';
import { manrope } from '@/shared/fonts';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

import { ScaleType } from '../../types';

const localeFormat: Record<Locale, LocaleFormatter> = {
	en: enUS,
	ru,
};

const format: Record<Locale, string> = {
	en: 'MM/dd/yy @ hh:mm a',
	ru: 'dd.MM.yy @ HH:mm',
};

export const scaleFullMode = (locale: Locale): ScaleType => ({
	x: {
		adapters: {
			date: {
				locale: localeFormat[locale],
			},
		},
		type: 'time',
		time: {
			unit: 'day',
			displayFormats: {
				day: format[locale],
			},
			tooltipFormat: format[locale],
		},
		grid: {
			color: '#263147',
		},
		ticks: {
			font: {
				family: manrope.style.fontFamily,
				weight: 400,
				size: 14,
			},
		},
	},
	y: {
		grid: {
			color: (ctx: ScriptableScaleContext) => {
				if (ctx.index === 0) {
					return '#E83536';
				}
				return '#263147';
			},
		},
		adapters: {
			date: locale,
		},
		ticks: {
			display: true,
			font: {
				family: manrope.style.fontFamily,
				weight: 400,
				size: 14,
			},
			color: '#ECECEC',
			callback: (tickValue: string | number) =>
				`$ ${formatLocaleNumber(locale, tickValue as number)}`,
		},
	},
});
