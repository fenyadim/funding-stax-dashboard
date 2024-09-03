import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { FC, PropsWithChildren } from 'react';

export const RootProviders: FC<PropsWithChildren> = async ({ children }) => {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	);
};
