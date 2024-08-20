'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { PlatformDetailInfo, PlatformStatistic } from '@/components/Platform';
import { Button, Card, Flex } from '@/components/ui';
import { Locale } from '@/config/localeConfig';

import styles from './PlatformPastBlock.module.scss';

interface PlatformPastBlockProps {
	locale: Locale;
}

export const PlatformPastBlock: FC<PlatformPastBlockProps> = ({ locale }) => {
	const t = useTranslations('PlatformPage');
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);

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
				<Button
					className={styles.button}
					theme='accent'
					onClick={handleOpen}
				>
					{t('Details')}
				</Button>
			</Card>
			{open && <PlatformDetailInfo locale={locale} />}
		</Flex>
	);
};
