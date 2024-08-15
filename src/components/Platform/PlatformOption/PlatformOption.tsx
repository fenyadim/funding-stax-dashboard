import React from 'react';

import { Button, Flex } from '@/components/ui';
import { formatLocaleNumber } from '@/utils/formatLocaleNumber';

import styles from './PlatformOption.module.scss';

export type PlatformItemType<T> = {
	id: T;
	name: T;
};

interface PlatformOptionType<T> {
	title: string;
	items: Array<PlatformItemType<T>>;
	idActive: T;
	setIdActive: (id: T) => void;
	icon?: string;
	className?: string;
	locale?: string;
}

export function PlatformOption<T extends string | number>({
	title,
	items,
	idActive,
	setIdActive,
	icon,
	className,
	locale,
}: PlatformOptionType<T>) {
	return (
		<Flex
			gap='16'
			align='start'
			direction='column'
			className={styles.wrapper}
		>
			<h3 className={styles.title}>{title}</h3>
			<Flex wrap='wrap' gap='8'>
				{items.map((item) => (
					<Button
						className={styles.button}
						id={String(item.id)}
						key={item.id}
						onClick={() => setIdActive(item.id)}
						theme={item.id === idActive ? 'accent' : 'primary'}
					>
						<span>{icon && icon}</span>
						{typeof item.name === 'string' || !locale
							? item.name
							: formatLocaleNumber(locale, item.name)}
					</Button>
				))}
			</Flex>
		</Flex>
	);
}
