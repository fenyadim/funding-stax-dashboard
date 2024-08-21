import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

import { PlatformPastItem } from '@/components/Platform/PlatformPastBlock/PlatformPastItem';
import { Flex } from '@/components/ui';
import { Locale } from '@/config/localeConfig';

import styles from './PlatformPastBlock.module.scss';

interface PlatformPastBlockProps {
	locale: Locale;
}

export const PlatformPastBlock: FC<PlatformPastBlockProps> = async ({
	locale,
}) => {
	const t = await getTranslations('PlatformPage');

	return (
		<Flex
			direction='column'
			align='start'
			gap='16'
			max
			className={styles.wrapper}
		>
			<h2 className={styles.title}>{t('Past Challenges')}</h2>
			<PlatformPastItem
				locale={locale}
				accountId='826464'
				challengeCount={6000}
				result='Failed'
				stageCount='1'
				todayPnl={-347.64}
				theme='negative'
			/>
			<PlatformPastItem
				locale={locale}
				accountId='826464'
				challengeCount={6000}
				result='Success'
				stageCount='1'
				todayPnl={50.64}
				theme='positive'
			/>
		</Flex>
	);
};
