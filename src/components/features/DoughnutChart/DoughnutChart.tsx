import { ArcElement, Chart as ChartJS } from 'chart.js';
import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { doughnutData, doughnutOptions } from '@/config/doughnutChartConfig';

ChartJS.register(ArcElement);

interface DoughnutChartProps {
	winValue: number;
	loseValue: number;
	className?: string;
}

export const DoughnutChart: FC<DoughnutChartProps> = ({
	winValue,
	loseValue,
	className,
}) => {
	return (
		<div className={className} style={{ height: '100%' }}>
			<Doughnut
				data={doughnutData(winValue, loseValue)}
				options={doughnutOptions}
			/>
		</div>
	);
};
