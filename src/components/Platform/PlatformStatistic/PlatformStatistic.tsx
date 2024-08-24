import cn from 'classnames';
import { FC } from 'react';

import { Flex, Popover } from '@/components/ui';
import { calcPercentOf } from '@/shared/utils/calcPercentOf';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { minusOrPlusSign } from '@/shared/utils/minusOrPlusSign';

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
	info,
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
			<Flex gap='8'>
				<p className={styles.title}>{title}</p>
				{info && <Popover size='extraSmall' content={info} />}
			</Flex>
			<div className={styles.valueWrapper}>
				<h3
					className={cn(styles.value, {
						[styles.minus]:
							mode === 'pnl' ||
							(mode === 'percent' &&
								minusOrPlusSign(value as number) === '-'),
					})}
				>
					{before}
					{mode === 'pnl' ||
						(mode === 'percent' &&
							minusOrPlusSign(value as number))}
					{mode === 'currency' || (mode === 'pnl' && locale)
						? '$'
						: ''}{' '}
					<span>
						{typeof value === 'string' || !locale
							? value
							: formatLocaleNumber(locale, value)}
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
