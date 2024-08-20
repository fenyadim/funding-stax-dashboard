import { useLocale } from 'next-intl';

import {
	PlatformCreateChallenge,
	PlatformPastBlock,
} from '@/components/Platform';
import { Flex } from '@/components/ui';
import { Locale } from '@/config/localeConfig';

export const PlatformPage = () => {
	const locale = useLocale() as Locale;

	return (
		<Flex max direction='column' gap='32' align='start'>
			<PlatformCreateChallenge locale={locale} />
			<PlatformPastBlock locale={locale} />
		</Flex>
	);
};
