import cn from 'classnames';
import React, { FC } from 'react';

import { Flex, FlexProps } from '@/components/ui';

import styles from './Card.module.scss';

export interface CardProps extends FlexProps {
	size?: 'small' | 'medium';
	theme?: 'negative' | 'positive' | 'neutral';
}

export const Card: FC<CardProps> = ({
	children,
	size = 'medium',
	theme = 'neutral',
	className,
	...props
}) => {
	return (
		<Flex
			className={cn(
				className,
				styles.cardWrapper,
				styles[size],
				styles[theme],
			)}
			{...props}
		>
			{children}
		</Flex>
	);
};
