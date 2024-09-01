import { useLocale } from 'next-intl';
import { FC } from 'react';

import { InfoText } from '@/components/features';
import { Block, Card } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';

import styles from './ResultBlock.module.scss';

interface ResultBlockProps {
	className?: string;
}

export const ResultBlock: FC<ResultBlockProps> = ({}) => {
	const locale = useLocale() as Locale;

	return (
		<Block max className={styles.wrapper} gap={32} title='Current Results'>
			<Card size='small' variant='negative'>
				<h3 className={styles.title}>Max Daily Drawdown</h3>
				<InfoText
					align='center'
					mode='currency'
					title='Initial Limit'
					value={300.67}
					locale={locale}
				/>
				<InfoText
					align='center'
					mode='currency'
					title='Min daily equity'
					value={5712.66}
					locale={locale}
				/>
			</Card>
			<Card size='small' variant='positive'>
				<h3 className={styles.title}>Max Permitted Losses</h3>
				<InfoText
					align='center'
					mode='currency'
					title='Max Loss'
					value={600}
					locale={locale}
				/>
				<InfoText
					align='center'
					mode='currency'
					title='Remaining'
					value={265.69}
					locale={locale}
				/>
			</Card>
			<Card size='small' variant='negative'>
				<h3 className={styles.title}>Minimum Trading Days</h3>
				<InfoText align='center' title='Objective' value='8' />
				<InfoText align='center' title='Current' value='1' />
			</Card>
			<Card size='small' variant='negative'>
				<h3 className={styles.title}>Profit Target</h3>
				<InfoText
					align='center'
					mode='currency'
					title='Objective'
					value={480}
					locale={locale}
				/>
				<InfoText
					align='center'
					mode='currency'
					title='Remaining'
					value={814.31}
					locale={locale}
				/>
			</Card>
		</Block>
	);
};
