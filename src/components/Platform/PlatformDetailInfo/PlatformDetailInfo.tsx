import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PlatformStatistic } from '@/components/Platform';
import { DoughnutChart, LinearChart } from '@/components/features';
import { Card, Flex } from '@/components/ui';
import { Locale } from '@/config/localeConfig';

import styles from './PlatformDetailInfo.module.scss';

interface PlatformDetailInfoProps {
	locale: Locale;
}

export const PlatformDetailInfo: FC<PlatformDetailInfoProps> = ({ locale }) => {
	const t = useTranslations('PlatformPage');

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
				<LinearChart />
			</Card>
			<Card heightMax direction='column' align='start' gap='16'>
				<PlatformStatistic
					value={814.31}
					title={t('Target Amount Left to Earn')}
					locale={locale}
					mode='currency'
				/>
				<PlatformStatistic
					value={-334.31}
					title={t('Total P/L')}
					locale={locale}
					mode='pnl'
					percentOf={6000}
				/>
			</Card>
			<Card gap='32' className={styles.pnlPercentWrapper}>
				<Flex direction='column' gap='16'>
					<PlatformStatistic
						value={20}
						title={t('Winning Trades')}
						locale={locale}
						mode='percent'
						after='%'
					/>
					<PlatformStatistic
						value={-80}
						title={t('Losing Trades')}
						locale={locale}
						mode='percent'
						after='%'
					/>
				</Flex>
				<DoughnutChart winValue={20} loseValue={80} />
			</Card>
		</Flex>
	);
};
