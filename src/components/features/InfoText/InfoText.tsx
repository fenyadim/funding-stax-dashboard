import cn from 'classnames';
import { FC } from 'react';

import { Flex, Popover } from '@/components/ui';

import styles from './InfoText.module.scss';
import { modeElement } from './elements';
import { PlatformStatisticProps } from './types';

export const InfoText: FC<PlatformStatisticProps> = ({
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
				{modeElement(mode, value, before, after, locale, percentOf)}
			</div>
		</Flex>
	);
};
