import {
	CategoryScale,
	Chart as ChartJS,
	Filler,
	LineElement,
	LinearScale,
	PointElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { FC } from 'react';
import { Line } from 'react-chartjs-2';

import { PlatformStatistic } from '@/components/Platform';
import { Card, Flex } from '@/components/ui';
import { linearData, linearOptions } from '@/config/linearChartConfig';
import { Locale } from '@/config/localeConfig';

import styles from './PlatformDetailInfo.module.scss';

interface PlatformDetailInfoProps {
	locale: Locale;
}

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	ChartDataLabels,
	Filler,
);

export const PlatformDetailInfo: FC<PlatformDetailInfoProps> = ({ locale }) => {
	return (
		<Flex gap='16' justify='between'>
			<Card
				className={styles.wrapper}
				size='small'
				direction='column'
				align='start'
			>
				<PlatformStatistic
					className={styles.textWrapper}
					value={5665.69}
					title='Account Balance'
					mode='currency'
					locale={locale}
				/>
				<Line data={linearData} options={linearOptions(locale)} />
			</Card>
			<Card
				className={styles.wrapper}
				size='small'
				direction='column'
				align='start'
			>
				<PlatformStatistic
					className={styles.textWrapper}
					value={5665.69}
					title='Account Balance'
					mode='currency'
					locale={locale}
				/>
				<Line data={linearData} options={linearOptions(locale)} />
			</Card>
			<Card
				className={styles.wrapper}
				size='small'
				direction='column'
				align='start'
			>
				<PlatformStatistic
					className={styles.textWrapper}
					value={5665.69}
					title='Account Balance'
					mode='currency'
					locale={locale}
				/>
				<Line data={linearData} options={linearOptions(locale)} />
			</Card>
		</Flex>
	);
};
