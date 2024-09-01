'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FC, MouseEventHandler, useRef, useState } from 'react';

import { PlatformDetailInfo } from '@/components/Platform';
import { InfoText } from '@/components/features';
import { Card } from '@/components/ui';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/utils';

import { ChallengeItemProps } from '../type';

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

	const [open, setOpen] = useState<boolean | undefined>(undefined);
	const router = useRouter();
	const buttonRef = useRef(null);

	const handleOpen: MouseEventHandler<HTMLDivElement> = (e) => {
		if (e.target !== buttonRef.current)
			setOpen(open === undefined ? true : !open);
	};

	return (
		<>
			<Card
				className='relative w-full grid grid-cols-7 items-center rounded-full px-10 cursor-pointer before:content-arrowWhite before:absolute before:right-10'
				variant={theme}
				size='small'
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
					className='w-[140px]'
					variant='secondary'
					size='lg'
					onClick={() => router.push(`/challenge/${id}`)}
				>
					{t('Details')}
				</Button>
			</Card>
			<PlatformDetailInfo
				data-state={open ? 'open' : open === undefined ? '' : 'closed'}
				className={cn(
					'h-0 overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
					{
						'h-full': open,
					},
				)}
				locale={locale}
			/>
		</>
	);
};
