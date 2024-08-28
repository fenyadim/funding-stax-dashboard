import { Locale } from '@/shared/config/localeConfig';
import { linearGradientChart } from '@/shared/utils/linearGradientChart';

import { ScaleType } from '../../types';

export const scaleMiniMode = (locale: Locale): ScaleType => ({
	x: {
		grid: {
			color: (context) =>
				linearGradientChart(context, '#BAFF66', 'rgba(0,0,0,0)'),
			tickLength: 5,
		},
		border: {
			display: false,
			dash: [2, 2],
		},
	},
	y: {
		grid: {
			display: false,
		},
		ticks: {
			display: false,
		},
	},
});
