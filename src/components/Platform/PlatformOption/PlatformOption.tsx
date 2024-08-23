import React from 'react';

import { Button, Flex, Popover } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';
import { formatLocaleNumber } from '@/utils/formatLocale';

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
	className?: string;
	locale?: Locale;
	info?: string;
}

export function PlatformOption<T extends string | number>({
	title,
	items,
	idActive,
	setIdActive,
	className,
	locale,
	info,
}: PlatformOptionType<T>) {
	return (
		<Flex
			gap='16'
			align='start'
			direction='column'
			className={styles.wrapper}
		>
			<Flex gap='8'>
				<h3 className={styles.title}>{title}</h3>
				{info && <Popover content={info} />}
			</Flex>
			<Flex wrap='wrap' gap='8'>
				{items.map((item) => (
					<Button
						className={styles.button}
						id={String(item.id)}
						key={item.id}
						onClick={() => setIdActive(item.id)}
						theme={item.id === idActive ? 'accent' : 'primary'}
					>
						{typeof item.name === 'string' || !locale ? (
							item.name
						) : (
							<>
								<span>$</span>
								{formatLocaleNumber(locale, item.name)}
							</>
						)}
					</Button>
				))}
			</Flex>
		</Flex>
	);
}
