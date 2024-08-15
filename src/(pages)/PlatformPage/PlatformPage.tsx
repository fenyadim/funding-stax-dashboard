'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import {
	PlatformItemType,
	PlatformOption,
	PlatformStatistic,
} from '@/components/Platform';
import { Card, Flex } from '@/components/ui';
import { Locale } from '@/config';

import styles from './PlatformPage.module.scss';

const challengeValues: PlatformItemType<number>[] = [
	{ id: 6000, name: 6000 },
	{ id: 15000, name: 15000 },
	{ id: 25000, name: 25000 },
	{ id: 50000, name: 50000 },
	{ id: 100000, name: 100000 },
	{ id: 200000, name: 200000 },
];

export const PlatformPage = () => {
	const [type, setType] = useState('one-phase');
	const [value, setValue] = useState(6000);

	const t = useTranslations('PlatformPage');
	const locale = useLocale() as Locale;

	const challengeTypes: PlatformItemType<string>[] = [
		{ id: 'one-phase', name: t('One Phase') },
		{ id: 'two-phase', name: t('Two Phase') },
		{ id: 'swing', name: t('Swing') },
	];

	return (
		<Card
			gap='32'
			direction='column'
			align='start'
			max
			className={styles.wrapper}
		>
			<PlatformOption
				title={t('Challenge Type')}
				items={challengeTypes}
				idActive={type}
				setIdActive={setType}
			/>
			<Flex>
				<PlatformOption
					title={t('Challenge Value')}
					items={challengeValues}
					idActive={value}
					setIdActive={setValue}
					locale={locale}
				/>
			</Flex>
			<div className={styles.statisticsWrapper}>
				<PlatformStatistic
					title={t('Platform')}
					value={t('Trade Locker')}
				/>
				<PlatformStatistic
					title={t('Refundable Registration Fee')}
					value={56}
					locale={locale}
				/>
				<PlatformStatistic
					title={t('Max Daily Loss')}
					value={3}
					after='%'
				/>
				<PlatformStatistic
					title={t('Profit Target')}
					value={10}
					after='%'
				/>
				<PlatformStatistic
					title={t('Minimum Trading Days')}
					value={4}
				/>
				<PlatformStatistic
					title={t('Duration')}
					value={t('Unlimited')}
				/>
				<PlatformStatistic title={t('Leverage')} value='1:30' />
				<PlatformStatistic
					title={t('Max Overall Loss')}
					value={6}
					after='%'
				/>
			</div>
		</Card>
	);
};
