import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DoughnutChart, InfoText } from '@/components/features';
import {
	LinearChart,
	linearDataForDetailInfo,
} from '@/components/features/LinearChart';
import { Card } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';
import { Flex } from '@/shared/ui';

import styles from './PlatformDetailInfo.module.scss';

interface PlatformDetailInfoProps {
	locale: Locale;
	className?: string;
}

export const PlatformDetailInfo: FC<PlatformDetailInfoProps> = ({
	locale,
	className,
}) => {
	const t = useTranslations('PlatformPage');

	return (
		<Flex className={className} wrap='wrap' align='stretch' gap={16}>
			<Card className={styles.balanceWrapper} size='small'>
				<InfoText
					className={styles.textWrapper}
					value={5665.69}
					title='Account Balance'
					mode='currency'
					locale={locale}
				/>
				<LinearChart data={linearDataForDetailInfo} theme='mini' />
			</Card>
			<Card className={styles.totalPnlWrapper}>
				<InfoText
					value={814.31}
					title={t('Target Amount Left to Earn')}
					locale={locale}
					mode='currency'
				/>
				<InfoText
					value={-334.31}
					title={t('Total P/L')}
					locale={locale}
					mode='pnl'
					percentOf={6000}
				/>
			</Card>
			<Card className={styles.pnlPercentWrapper}>
				<Flex direction='column' gap={16}>
					<InfoText
						value={20}
						title={t('Winning Trades')}
						locale={locale}
						mode='percent'
						after='%'
					/>
					<InfoText
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
				<InfoText
					className={styles.limitWrapper}
					value='07/29/2024'
					title={t('No limit')}
				/>
			</Card>
			<Card variant='negative' size='small'>
				<InfoText
					value={300.67}
					mode='currency'
					locale={locale}
					title={t('Today’s Permitted Loss')}
				/>
			</Card>
			<Card variant='negative' size='small'>
				<InfoText value='19' title={t('Active Trading Days')} />
			</Card>
			<Card variant='positive' size='small'>
				<InfoText
					value={600}
					mode='currency'
					locale={locale}
					title={t('Max Permitted Loss')}
				/>
			</Card>
		</Flex>
	);
};
