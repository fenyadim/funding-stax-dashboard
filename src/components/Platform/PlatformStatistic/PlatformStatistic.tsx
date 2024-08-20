import cn from 'classnames';
import React, { FC } from 'react';

import { Flex } from '@/components/ui';
import { calcPercentOf } from '@/utils/calcPercentOf';
import { formatLocaleNumber } from '@/utils/formatLocale';
import { minusOrPlusSign } from '@/utils/minusOrPlusSign';

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
	percentOf,
	className,
}) => {
	return (
		<Flex
			className={cn(styles.wrapper, styles[size], className)}
			direction='column'
			gap='8'
			align='start'
		>
			<p className={styles.title}>{title}</p>
			<div className={styles.valueWrapper}>
				<h3
					className={cn(styles.value, {
						[styles.minus]:
							minusOrPlusSign(value as number) === '-',
					})}
				>
					{before}
					{mode === 'pnl' && minusOrPlusSign(value as number)}
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
				{mode === 'pnl' && percentOf && typeof value === 'number' ? (
					<p
						className={cn(styles.percent, {
							[styles.minus]:
								minusOrPlusSign(value as number) === '-',
						})}
					>
						{minusOrPlusSign(value)}
						<span>{calcPercentOf(percentOf, value)}</span>%
					</p>
				) : (
					''
				)}
			</div>
		</Flex>
	);
};
