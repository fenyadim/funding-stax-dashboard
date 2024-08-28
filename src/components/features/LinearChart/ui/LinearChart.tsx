'use client';

import type { ChartData, ChartOptions } from 'chart.js';
import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	LineElement,
	LinearScale,
	PointElement,
	TimeScale,
	Tooltip,
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { useLocale } from 'next-intl';
import React, { FC, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { Locale } from '@/shared/config/localeConfig';

import {
	linearOptionsFull,
	linearOptionsMinimalism,
	linearPlugin,
} from '../config/optionConfig';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartDataLabels,
	Filler,
	Tooltip,
	TimeScale,
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

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('chartjs-plugin-zoom').then((plugin) => {
				ChartJS.register(plugin.default);
			});
		}
	}, []);

	return (
		<Line data={data} options={themeMode[theme]} plugins={linearPlugin} />
	);
};
