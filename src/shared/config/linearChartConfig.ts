import type { ChartData, ChartOptions } from 'chart.js';

import { Locale } from '@/shared/config/localeConfig';
import { formatLocaleNumber } from '@/utils/formatLocale';
import { linearGradientChart } from '@/utils/linearGradientChart';

import { manrope, roboto } from '../fonts/fonts';

export const linearOptions = (locale: Locale): ChartOptions<'line'> => ({
	responsive: true,
	borderColor: '#BAFF66',
	aspectRatio: 2,
	backgroundColor: (context) =>
		linearGradientChart(context, '#BAFF66', 'rgba(255,255,255,0)'),
	font: {
		size: 12,
		family: manrope.style.fontFamily,
		weight: 500,
	},
	plugins: {
		datalabels: {
			font: {
				size: 16,
				weight: 500,
				family: roboto.style.fontFamily,
			},
			color: '#FFFFFF',
			align: 250,
			anchor: 'end',
			formatter: (value, context) => {
				if (context.dataIndex === context.dataset.data.length - 1) {
					return '$ ' + formatLocaleNumber(locale, value);
				}
				return '';
			},
		},
	},
	layout: {
		autoPadding: true,
		padding: {
			top: 30,
			right: 30,
		},
	},
	scales: {
		x: {
			grid: {
				color: (context) =>
					linearGradientChart(
						context,
						'#BAFF66',
						'rgba(255,255,255,0)',
					),
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
	},
});

export const linearData: ChartData<'line'> = {
	labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
	datasets: [
		{
			data: [5, 8, 10, 12, 3000, 5500, 5665.69],
			fill: true,
			pointRadius: [0, 0, 0, 0, 0, 0, 5],
			pointBackgroundColor: '#182132',
			pointBorderWidth: 2,
		},
	],
};
