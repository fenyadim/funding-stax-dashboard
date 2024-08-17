import cn from 'classnames';
import React, { FC } from 'react';

import { Flex, FlexProps } from '@/components/ui';

import styles from './Card.module.scss';

interface CardProps extends FlexProps {
	size?: 'small' | 'medium';
}

export const Card: FC<CardProps> = ({
	children,
	size = 'medium',
	className,
	...props
}) => {
	return (
		<Flex
			className={cn(styles.cardWrapper, className, styles[size])}
			{...props}
		>
			{children}
		</Flex>
	);
};
