import { useLocale } from 'next-intl';
import { ReactNode } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar';

export default function Layout({ children }: { children: ReactNode }) {
	const locale = useLocale() as Locale;

	return (
		<>
			<Header />
			<div className='grid grid-cols-[350px_1fr] gap-4 px-6'>
				<Sidebar />
				<main className=''>
					{children}
					{/*<Footer />*/}
				</main>
			</div>
		</>
	);
}
