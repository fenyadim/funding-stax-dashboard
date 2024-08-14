import React, { FC } from 'react';

import { Button, Flex } from '@/components/ui';

import styles from './PlatformOption.module.scss';

type ItemType = {
	id: string;
	name: string;
};

interface PlatformOptionType {
	title: string;
	items: ItemType[];
	idActive: string;
	setIdActive: (id: string) => void;
}

export const PlatformOption: FC<PlatformOptionType> = ({
	title,
	items,
	idActive,
	setIdActive,
}) => {
	return (
		<Flex
			gap='16'
			align='start'
			direction='column'
			className={styles.wrapper}
		>
			<h3 className={styles.title}>{title}</h3>
			<Flex gap='8'>
				{items.map((item) => (
					<Button
						className={styles.button}
						id={item.id}
						key={item.id}
						onClick={() => setIdActive(item.id)}
						theme={item.id === idActive ? 'accent' : 'primary'}
					>
						{item.name}
					</Button>
				))}
			</Flex>
		</Flex>
	);
};
