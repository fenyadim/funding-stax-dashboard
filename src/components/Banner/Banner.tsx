import React from 'react';

import { ALink, Button } from '@/components/ui';
import { Flex } from '@/shared/ui';

import styles from './Banner.module.scss';

export const Banner = () => {
	return (
		<Flex gap={16} direction='column' className={styles.wrapper}>
			<h3>Get a Market Head Start with up to $200K!</h3>
			<Button theme='accent'>New Challenge</Button>
			<ALink href='#'>Learn more</ALink>
		</Flex>
	);
};
