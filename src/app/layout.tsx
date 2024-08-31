import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { manrope, roboto } from '@/shared/fonts';
import { RootProviders } from '@/shared/providers/RootProviders/RootProviders';

// import '@/shared/styles/globals.css';
import './styles/global.css';

export const metadata: Metadata = {
	title: 'Funding Stax',
	description: 'Generated by create next app',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const locale = await getLocale();
	return (
		<html lang={locale}>
			<body className={`${manrope.variable} ${roboto.variable}`}>
				<RootProviders>{children}</RootProviders>
			</body>
		</html>
	);
}
