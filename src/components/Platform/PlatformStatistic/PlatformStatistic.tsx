import cn from 'classnames';
import React, { FC } from 'react';

import { Flex } from '@/components/ui';
import { Locale } from '@/config';
import { formatLocaleNumber, localeCurrencyIcon } from '@/utils/formatLocale';

import styles from './PlatformStatistic.module.scss';
import { PlatformStatisticProps } from './types';

export const PlatformStatistic: FC<PlatformStatisticProps> = ({
	title,
	value,
	before,
	after,
	locale,
	size = 'large',
	mode = 'text',
}) => {
	const isMinusSign = mode === 'pnl' && (value as number) < 0;
	const isPlusSign = mode === 'pnl' && (value as number) > 0;

	return (
		<Flex
			className={cn(styles.wrapper, styles[size])}
			direction='column'
			gap='8'
			align='start'
		>
			<p className={styles.title}>{title}</p>
			<h3
				className={cn(styles.value, {
					[styles.minus]: isMinusSign,
				})}
			>
				{before}
				{isMinusSign ? '-' : isPlusSign ? '+' : ''}
				{mode === 'currency' || (mode === 'pnl' && locale)
					? localeCurrencyIcon(locale as Locale)
					: ''}{' '}
				<span>
					{mode === 'text' || !locale
						? value
						: formatLocaleNumber(locale, value as number)}
				</span>{' '}
				{after}
			</h3>
		</Flex>
	);
};
