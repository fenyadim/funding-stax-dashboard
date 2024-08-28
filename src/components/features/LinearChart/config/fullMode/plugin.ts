import type { PluginOptionsByType } from 'chart.js';

import { Locale } from '@/shared/config/localeConfig';
import { manrope } from '@/shared/fonts';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

export const pluginFullMode = (
	locale: Locale,
): PluginOptionsByType<'line'> => ({
	tooltip: {
		borderColor: '#BAFF66',
		borderWidth: 1,
		cornerRadius: 20,
		backgroundColor: '#263147',
		bodyColor: '#6fba64',
		displayColors: false,
		padding: {
			top: 15,
			bottom: 15,
			left: 20,
			right: 20,
		},
		titleFont: {
			family: manrope.style.fontFamily,
			weight: 400,
			size: 14,
		},
		bodyFont: {
			family: manrope.style.fontFamily,
			weight: 400,
			size: 14,
		},
		//@ts-ignore
		callbacks: {
			title: (tooltipItems) => `Date: ${tooltipItems[0].label}`,
			labelColor: () => {},
			label: (tooltipItem) =>
				`Equity: $ ${formatLocaleNumber(locale, tooltipItem.raw as number)}`,
		},
	},
	datalabels: {
		display: false,
	},
	zoom: {
		pan: {
			enabled: true,
		},
		zoom: {
			wheel: {
				enabled: true,
			},
			pinch: {
				enabled: true,
			},
		},
	},
});
