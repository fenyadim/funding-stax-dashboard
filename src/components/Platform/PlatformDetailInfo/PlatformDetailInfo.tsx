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
		<Flex wrap='wrap' align='stretch' gap='16'>
			<Card
				className={styles.balanceWrapper}
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
			<Card
				className={styles.totalPnlWrapper}
				direction='column'
				gap='16'
				align='start'
			>
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
			<Card
				justify='center'
				gap='32'
				className={styles.pnlPercentWrapper}
			>
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
			<Card size='small'>
				<PlatformStatistic
					className={styles.limitWrapper}
					value='07/29/2024'
					title={t('No limit')}
				/>
			</Card>
			<Card theme='negative' size='small'>
				<PlatformStatistic
					value={300.67}
					mode='currency'
					locale={locale}
					title={t('Today’s Permitted Loss')}
				/>
			</Card>
			<Card theme='negative' size='small'>
				<PlatformStatistic
					value='19'
					title={t('Active Trading Days')}
				/>
			</Card>
			<Card theme='positive' size='small'>
				<PlatformStatistic
					value={600}
					mode='currency'
					locale={locale}
					title={t('Max Permitted Loss')}
				/>
			</Card>
		</Flex>
	);
};
