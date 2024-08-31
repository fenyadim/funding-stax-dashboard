import { FC } from 'react';

import { Flex, FlexProps } from '@/shared/ui';

import styles from './Block.module.scss';

interface BlockProps extends FlexProps {
	title: string;
}

export const Block: FC<BlockProps> = ({ children, title, ...props }) => {
	return (
		<Flex direction='column' align='start' gap={8} max>
			<h2 className={styles.title}>{title}</h2>
			<Flex {...props}>{children}</Flex>
		</Flex>
	);
};
