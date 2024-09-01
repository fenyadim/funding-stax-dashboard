'use client';

import { useLocale } from 'next-intl';
import { FC } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

interface TitleBlockProps {
	className?: string;
	id: string;
	challengeCount: number;
	stageCount: number;
}

export const TitleBlock: FC<TitleBlockProps> = ({
	id,
	challengeCount,
	stageCount,
}) => {
	const locale = useLocale() as Locale;

	return (
		<h1 className='text-3xl ml-10 *:text-accent'>
			Challenge - <span>$ </span>
			{formatLocaleNumber(locale, challengeCount)} - <span>#</span>
			{id} - Stage: <span>{stageCount}</span>
		</h1>
	);
};
