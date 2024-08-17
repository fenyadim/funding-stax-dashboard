import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PlatformStatistic } from '@/components/Platform';
import { Button, Card, Flex } from '@/components/ui';
import { Locale } from '@/config';

import styles from './PlatformPastBlock.module.scss';

interface PlatformPastBlockProps {
	locale: Locale;
}

export const PlatformPastBlock: FC<PlatformPastBlockProps> = ({ locale }) => {
	const t = useTranslations('PlatformPage');

	return (
		<Flex
			direction='column'
			align='start'
			gap='16'
			max
			className={styles.wrapper}
		>
			<h2 className={styles.title}>Past Challenges</h2>
			<Card
				className={styles.cardWrapper}
				size='small'
				justify='between'
				max
			>
				<PlatformStatistic
					size='small'
					title={t('Platform')}
					value={t('Trade Locker')}
				/>
				<PlatformStatistic
					size='small'
					title={t('Account')}
					value='826464'
					before='#'
				/>
				<PlatformStatistic
					mode='currency'
					size='small'
					title={t('Challenge')}
					value={6000}
					locale={locale}
				/>
				<PlatformStatistic
					mode='pnl'
					size='small'
					title={t("Today's P/L")}
					value={-347.64}
					locale={locale}
				/>
				<PlatformStatistic size='small' title={t('Stage')} value='1' />
				<PlatformStatistic
					size='small'
					title={t('Result')}
					value={t('Failed')}
				/>
				<Button className={styles.button} theme='accent'>
					{t('Details')}
				</Button>
			</Card>
		</Flex>
	);
};
