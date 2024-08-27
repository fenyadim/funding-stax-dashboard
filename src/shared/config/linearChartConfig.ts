import type { ChartData, ChartOptions, Plugin } from 'chart.js';
import { Locale as LocaleFormatter, enUS, ru } from 'date-fns/locale';

import { Locale } from '@/shared/config/localeConfig';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { linearGradientChart } from '@/shared/utils/linearGradientChart';

import { manrope, roboto } from '../fonts/fonts';

const localeFormat: Record<Locale, LocaleFormatter> = {
	en: enUS,
	ru,
};

const format: Record<Locale, string> = {
	en: 'MM/dd/yy @ hh:mm a',
	ru: 'dd.MM.yy @ HH:mm',
};

export const linearOptionsMinimalism = (
	locale: Locale,
): ChartOptions<'line'> => ({
	responsive: true,
	borderColor: '#BAFF66',
	backgroundColor: (context) =>
		linearGradientChart(context, '#BAFF66', 'rgba(0,0,0,0)'),
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
	},
});

export const linearDataForDetailInfo: ChartData<'line'> = {
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

export const linearOptionsFull = (locale: Locale): ChartOptions<'line'> => ({
	interaction: {
		mode: 'index',
		intersect: false,
	},
	elements: {
		point: {
			radius: 0,
			hoverRadius: 6,
		},
	},
	responsive: true,
	aspectRatio: 3.2,
	borderColor: '#BAFF66',
	backgroundColor: (context) =>
		linearGradientChart(context, '#BAFF66', 'rgba(0,0,0,0)'),
	font: {
		size: 12,
		family: manrope.style.fontFamily,
		weight: 500,
	},
	plugins: {
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
	},
	layout: {
		autoPadding: true,
	},
	scales: {
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
				color: (ctx) => {
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
				callback: (tickValue) =>
					`$ ${formatLocaleNumber(locale, tickValue as number)}`,
			},
		},
	},
});

export const linearDataForChallengeDetails: ChartData<'line'> = {
	labels: [
		new Date('07/29/2024 21:36'),
		new Date('07/30/2024 04:21'),
		new Date('07/30/2024 11:06'),
		new Date('07/30/2024 17:51'),
		new Date('07/31/2024 00:36'),
		new Date('07/31/2024 07:21'),
		new Date('07/31/2024 14:06'),
		new Date('07/31/2024 20:51'),
		new Date('08/01/2024 03:36'),
		new Date('08/01/2024 10:21'),
		new Date('08/01/2024 17:06'),
	],
	datasets: [
		{
			data: [5670, 5610, 5670, 5615, 5820, 5730, 6000, 5700],
			fill: true,
			pointBackgroundColor: '#182132',
			hoverBorderWidth: 3,
		},
	],
};

export const linearPlugin: Plugin<'line'>[] = [
	{
		id: 'hoverLine',
		afterDatasetDraw: (chart) => {
			const {
				ctx,
				chartArea: { bottom },
			} = chart;

			ctx.save();

			chart.getDatasetMeta(0).data.forEach((dataPoint) => {
				if (dataPoint.active) {
					ctx.beginPath();
					ctx.setLineDash([5, 7]);
					ctx.moveTo(dataPoint.x, bottom);
					ctx.lineTo(dataPoint.x, dataPoint.y);
					ctx.lineWidth = 2;
					ctx.strokeStyle = '#BAFF66';
					ctx.stroke();
					ctx.restore();
				}
			});
		},
		beforeDatasetDraw: (chart) => {
			const {
				ctx,
				chartArea: { left, right },
			} = chart;

			ctx.save();

			chart.getDatasetMeta(0).data.forEach((dataPoint) => {
				if (dataPoint.active) {
					ctx.beginPath();
					ctx.setLineDash([3, 7]);
					ctx.moveTo(left, dataPoint.y);
					ctx.lineTo(right, dataPoint.y);
					ctx.lineWidth = 1;
					ctx.strokeStyle = '#E83536';
					ctx.stroke();
					ctx.restore();
				}
			});
		},
	},
];
