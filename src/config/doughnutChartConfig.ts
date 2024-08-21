import type { ChartData, ChartOptions } from 'chart.js';

export const doughnutOptions: ChartOptions<'doughnut'> = {
	responsive: true,
	plugins: {
		datalabels: {
			display: false,
		},
	},
	offset: 20,
};

export const doughnutData = (
	win: number,
	lose: number,
): ChartData<'doughnut'> => ({
	datasets: [
		{
			data: [win, lose],
			backgroundColor: ['#BAFF66', '#FF3737'],
			borderColor: 'transparent',
		},
	],
});
