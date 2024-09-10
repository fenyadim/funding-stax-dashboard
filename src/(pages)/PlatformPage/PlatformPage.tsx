import { getLocale, getTranslations } from 'next-intl/server';

// import { PlatformCreateChallenge } from '@/components/Platform';

const PlatformCreateChallenge = dynamic(() => import('@/components/Platform'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

import { ChallengeItemList } from '@/entities/Challenge';
import { ChallengeItemProps } from '@/entities/Challenge/type';
import { Locale } from '@/shared/config/localeConfig';
import { Flex } from '@/shared/ui';
import dynamic from 'next/dynamic';

export const PlatformPage = async () => {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations('PlatformPage');

  const items: Omit<ChallengeItemProps, 'locale' | 'theme'>[] = [
    {
      id: '1',
      accountId: '826464',
      challengeCount: 6000,
      result: 'Failed',
      stageCount: '1',
      todayPnl: -347.64,
    },
    {
      id: '3',
      accountId: '826462',
      challengeCount: 6000,
      result: 'Success',
      stageCount: '2',
      todayPnl: 34.64,
    },
  ];

  return (
    <Flex max direction='column' gap={32} align='start'>
      <PlatformCreateChallenge locale={locale} />
      <ChallengeItemList
        title={t('Past Challenges')}
        locale={locale}
        challengeItems={items}
      />
    </Flex>
  );
};
