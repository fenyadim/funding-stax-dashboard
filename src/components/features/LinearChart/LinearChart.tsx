import type { ChartData, ChartOptions } from 'chart.js';
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	LineElement,
	LinearScale,
	PointElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useLocale } from 'next-intl';
import React, { FC } from 'react';
import { Line } from 'react-chartjs-2';

import {
	linearOptionsFull,
	linearOptionsMinimalism,
	linearPlugin,
} from '@/shared/config/linearChartConfig';
import { Locale } from '@/shared/config/localeConfig';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartDataLabels,
	Filler,
);

interface LinearChartProps {
	data: ChartData<'line'>;
	theme: 'mini' | 'full';
}

export const LinearChart: FC<LinearChartProps> = ({ data, theme }) => {
	const locale = useLocale() as Locale;

	const themeMode: Record<LinearChartProps['theme'], ChartOptions<'line'>> = {
		mini: linearOptionsMinimalism(locale),
		full: linearOptionsFull(locale),
	};

	return (
		<Line data={data} options={themeMode[theme]} plugins={linearPlugin} />
	);
};
