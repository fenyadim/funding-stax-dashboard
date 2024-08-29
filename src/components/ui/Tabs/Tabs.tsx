import cn from 'classnames';
import { FC } from 'react';

import { Flex } from '../Flex/Flex';

import styles from './Tabs.module.scss';

export interface TabItem {
	label: string;
	value: string;
}

interface TabsProps {
	className?: string;
	tabs: TabItem[];
	activeTab: string;
	setActiveTab: (value: string) => void;
}

export const Tabs: FC<TabsProps> = ({
	activeTab,
	className,
	setActiveTab,
	tabs,
}) => {
	return (
		<Flex gap='32' className={cn(styles.wrapper, className)}>
			{tabs.map((tab) => (
				<button
					key={tab.value}
					className={cn(styles.tab, {
						[styles.active]: activeTab === tab.value,
					})}
					onClick={() => setActiveTab(tab.value)}
				>
					{tab.label}
				</button>
			))}
		</Flex>
	);
};
