import Link from 'next/link';
import React from 'react';

import { SocialButtons } from '@/components/features';
import { Button, Card } from '@/components/ui';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
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
					<li className={styles.activeTab}>
						<Link href='#'>Platforms</Link>
					</li>
					<li>
						<Link href='#'>Affiliates</Link>
					</li>
					<li>
						<Link href='#'>Leaderboard</Link>
					</li>
					<li>
						<Link href='#'>My Profile</Link>
					</li>
					<li>
						<Link href='#'>FAQ & Support</Link>
					</li>
				</ul>
			</nav>
			<SocialButtons gap='32' />
		</Card>
	);
};

export default Sidebar;
