import type { ChartData, ChartOptions, Plugin } from 'chart.js';

import { Locale } from '@/shared/config/localeConfig';
import { manrope } from '@/shared/fonts';
import { linearGradientChart } from '@/shared/utils/linearGradientChart';

import { pluginFullMode, scaleFullMode } from './fullMode';
import { pluginMiniMode, scaleMiniMode } from './mimiMode';

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
	plugins: pluginMiniMode(locale),
	layout: {
		autoPadding: true,
		padding: {
			top: 30,
			right: 30,
		},
	},
	scales: scaleMiniMode(locale),
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
	plugins: pluginFullMode(locale),
	layout: {
		autoPadding: true,
	},
	scales: scaleFullMode(locale),
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
