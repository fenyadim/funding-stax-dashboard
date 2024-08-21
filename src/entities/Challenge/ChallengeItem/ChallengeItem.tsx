'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { PlatformDetailInfo, PlatformStatistic } from '@/components/Platform';
import { Button, Card } from '@/components/ui';
import { ChallengeItemProps } from '@/entities/Challenge/type';

import styles from './ChallengeItem.module.scss';

export const ChallengeItem: FC<ChallengeItemProps> = ({
	locale,
	result,
	challengeCount,
	stageCount,
	todayPnl,
	accountId,
	theme,
}) => {
	const t = useTranslations('PlatformPage');

	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Card
				className={cn(styles.cardWrapper, { [styles.open]: open })}
				size='small'
				justify='between'
				max
				theme={theme}
				onClick={handleOpen}
			>
				<PlatformStatistic
					size='small'
					title={t('Platform')}
					value={t('Trade Locker')}
				/>
				<PlatformStatistic
					size='small'
					title={t('Account')}
					value={accountId}
					before='#'
				/>
				<PlatformStatistic
					mode='currency'
					size='small'
					title={t('Challenge')}
					value={challengeCount}
					locale={locale}
				/>
				<PlatformStatistic
					mode='pnl'
					size='small'
					title={t("Today's P/L")}
					info={
						'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
					}
					value={todayPnl}
					locale={locale}
				/>
				<PlatformStatistic
					size='small'
					title={t('Stage')}
					value={stageCount}
				/>
				<PlatformStatistic
					size='small'
					title={t('Result')}
					value={t(`${result}`)}
				/>
				<Button className={styles.button} theme='accent'>
					{t('Details')}
				</Button>
			</Card>
			<PlatformDetailInfo
				className={styles.wrapperInfo}
				locale={locale}
			/>
		</>
	);
};
