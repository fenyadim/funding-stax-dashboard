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
import React from 'react';
import { Line } from 'react-chartjs-2';

import { linearData, linearOptions } from '@/shared/config/linearChartConfig';
import { Locale } from '@/shared/config/localeConfig';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartDataLabels,
	Filler,
);

export const LinearChart = () => {
	const locale = useLocale() as Locale;

	return <Line data={linearData} options={linearOptions(locale)} />;
};
