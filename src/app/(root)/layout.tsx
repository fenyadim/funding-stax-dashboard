import { ReactNode } from 'react';

import { ScrollArea } from '@/shared/ui';
import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />
			<div className='grid grid-cols-[350px_1fr] gap-4 pl-6'>
				<Sidebar />
				<main className=''>
					<ScrollArea className='h-[calc(100vh-(32px+63px))] pr-6'>
						{children}
						<Footer />
					</ScrollArea>
				</main>
			</div>
		</>
	);
}
