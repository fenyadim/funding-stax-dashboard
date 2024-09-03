import { ReactNode } from 'react';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className='grid grid-cols-[350px_1fr] gap-4 px-6'>
				<Sidebar />
				<main className=''>
					{children}
					<Footer />
				</main>
			</div>
		</>
	);
}
