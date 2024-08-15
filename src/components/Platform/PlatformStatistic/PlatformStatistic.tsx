'use client';

import React, { FC } from 'react';

import { Flex } from '@/components/ui';
import { Locale } from '@/config';
import { formatLocaleNumber, localeCurrencyIcon } from '@/utils/formatLocale';

import styles from './PlatformStatistic.module.scss';

interface PlatformStatisticProps {
	title: string;
	value: string | number;
	after?: string;
	locale?: Locale;
}

export const PlatformStatistic: FC<PlatformStatisticProps> = ({
	title,
	value,
	after,
	locale,
}) => {
	return (
		<Flex
			className={styles.wrapper}
			direction='column'
			gap='8'
			align='start'
		>
			<p className={styles.title}>{title}</p>
			<h3 className={styles.value}>
				{locale && localeCurrencyIcon(locale)}{' '}
				<span>
					{typeof value === 'string' || !locale
						? value
						: formatLocaleNumber(locale, value)}
				</span>{' '}
				{after}
			</h3>
		</Flex>
	);
};
