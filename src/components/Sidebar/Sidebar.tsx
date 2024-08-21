'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Banner } from '@/components/Banner/Banner';
import { SocialButtons } from '@/components/features';
import { Button, Card } from '@/components/ui';
import { routeConfig } from '@/config/routeConfig';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<Card direction='column' gap='16' className={styles.sidebar}>
			<h1 className={styles.sidebarTitle}>
				5 665.69 <span>$</span>
			</h1>
			<Button className={styles.sidebarButton} theme='accent'>
				New Challenge
			</Button>
			<nav className={styles.navigation}>
				<ul>
					{routeConfig().map(({ path, name }) => (
						<li
							className={
								pathname === path ? styles.activeTab : ''
							}
							key={path}
						>
							<Link href={path}>{name}</Link>
						</li>
					))}
				</ul>
			</nav>
			<SocialButtons gap='32' />
			<Banner />
		</Card>
	);
};

export default Sidebar;
