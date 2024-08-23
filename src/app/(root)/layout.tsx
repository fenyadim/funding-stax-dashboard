import { ReactNode } from 'react';

import { Footer, Header, Sidebar } from '@/components';
import { Flex } from '@/components/ui';

import styles from './layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<Flex align='start' gap='16'>
				<Sidebar />
				<main className={styles.mainWrapper}>
					{children}
					<Footer />
				</main>
			</Flex>
		</>
	);
}
