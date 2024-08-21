import { getLocale, getTranslations } from 'next-intl/server';

import { Flex } from '@/components/ui';
import { Locale } from '@/config/localeConfig';
import { ChallengeItemList } from '@/entities/Challenge';
import { ChallengeItemProps } from '@/entities/Challenge/type';

export const ChallengeHistoryPage = async () => {
	const locale = (await getLocale()) as Locale;
	const t = await getTranslations('ChallengeHistoryPage');

	const items: Omit<ChallengeItemProps, 'locale' | 'theme'>[] = [
		{
			accountId: '826464',
			challengeCount: 6000,
			result: 'Failed',
			stageCount: '1',
			todayPnl: -347.64,
		},
		{
			accountId: '826462',
			challengeCount: 6000,
			result: 'Success',
			stageCount: '2',
			todayPnl: 34.64,
		},
		{
			accountId: '826464',
			challengeCount: 6000,
			result: 'Failed',
			stageCount: '1',
			todayPnl: -347.64,
		},
		{
			accountId: '826462',
			challengeCount: 6000,
			result: 'Success',
			stageCount: '2',
			todayPnl: 34.64,
		},
		{
			accountId: '826464',
			challengeCount: 6000,
			result: 'Failed',
			stageCount: '1',
			todayPnl: -347.64,
		},
	];

	return (
		<Flex>
			<ChallengeItemList
				title={t('Challenge History')}
				locale={locale}
				challengeItems={items}
			/>
		</Flex>
	);
};
