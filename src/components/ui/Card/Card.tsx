import cn from 'classnames';
import React, { FC } from 'react';

import { Flex, FlexProps } from '@/components/ui';

import styles from './Card.module.scss';

interface CardProps extends FlexProps {}

export const Card: FC<CardProps> = ({ children, className, ...props }) => {
	return (
		<Flex className={cn(styles.cardWrapper, className)} {...props}>
			{children}
		</Flex>
	);
};
