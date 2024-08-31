'use client';

import cn from 'classnames';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler, useRef, useState } from 'react';

import { PlatformDetailInfo } from '@/components/Platform';
import { InfoText } from '@/components/features';
import { Button, Card } from '@/components/ui';

import { ChallengeItemProps } from '../type';

import styles from './ChallengeItem.module.scss';

export const ChallengeItem: FC<ChallengeItemProps> = ({
	locale,
	result,
	challengeCount,
	stageCount,
	todayPnl,
	accountId,
	theme,
	id,
}) => {
	const t = useTranslations('PlatformPage');

	const [open, setOpen] = useState(false);
	const router = useRouter();
	const buttonRef = useRef(null);

	const handleOpen: MouseEventHandler<HTMLDivElement> = (e) => {
		if (e.target !== buttonRef.current) setOpen(!open);
	};

	return (
		<>
			<Card
				className={cn(styles.cardWrapper, {
					[styles.open]: open,
				})}
				variant={theme}
				onClick={handleOpen}
			>
				<InfoText size='sm' title={t('Platform')} value={t('Trade Locker')} />
				<InfoText size='sm' title={t('Account')} value={accountId} before='#' />
				<InfoText
					mode='currency'
					size='sm'
					title={t('Challenge')}
					value={challengeCount}
					locale={locale}
				/>
				<InfoText
					mode='pnl'
					size='sm'
					title={t("Today's P/L")}
					info={
						'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
					}
					value={todayPnl}
					locale={locale}
				/>
				<InfoText size='sm' title={t('Stage')} value={stageCount} />
				<InfoText size='sm' title={t('Result')} value={t(`${result}`)} />
				<Button
					ref={buttonRef}
					className={styles.button}
					theme='accent'
					onClick={() => router.push(`/challenge/${id}`)}
				>
					{t('Details')}
				</Button>
			</Card>
			<PlatformDetailInfo className={styles.wrapperInfo} locale={locale} />
		</>
	);
};
