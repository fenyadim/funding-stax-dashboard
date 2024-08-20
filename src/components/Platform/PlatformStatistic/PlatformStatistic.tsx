import cn from 'classnames';
import React, { FC } from 'react';

import { Flex } from '@/components/ui';
import { formatLocaleNumber } from '@/utils/formatLocale';

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
	className,
}) => {
	const isMinusSign = mode === 'pnl' && (value as number) < 0;
	const isPlusSign = mode === 'pnl' && (value as number) > 0;

	return (
		<Flex
			className={cn(styles.wrapper, styles[size], className)}
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
					? '$'
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
