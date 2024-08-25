'use client';

import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { PlatformItemType, PlatformOption } from '@/components/Platform';
import { InfoText } from '@/components/features';
import { Card, Checkbox, Flex } from '@/components/ui';
import { Locale } from '@/shared/config/localeConfig';

import styles from './PlatformCreateChallenge.module.scss';

interface PlatformCreateChallengeProps {
	locale: Locale;
}

const challengeValues: PlatformItemType<number>[] = [
	{ id: 6000, name: 6000 },
	{ id: 15000, name: 15000 },
	{ id: 25000, name: 25000 },
	{ id: 50000, name: 50000 },
	{ id: 100000, name: 100000 },
	{ id: 200000, name: 200000 },
];

export const PlatformCreateChallenge: FC<PlatformCreateChallengeProps> = ({
	locale,
}) => {
	const [type, setType] = useState('one-phase');
	const [value, setValue] = useState(6000);

	const t = useTranslations('PlatformPage');

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
				info={
					'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
				}
			/>
			<Flex align='end' gap='32'>
				<PlatformOption
					title={t('Challenge Value')}
					items={challengeValues}
					idActive={value}
					setIdActive={setValue}
					locale={locale}
					info={
						'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
					}
				/>
				<Flex gap='8' direction='column' align='start'>
					<Checkbox label={`${t('News Trading')} (+15%)`} />
					<p className={styles.textCheckbox}>
						Select to upgrade your challenge experience & unlock
						exclusive features
					</p>
				</Flex>
			</Flex>
			<div className={styles.statisticsWrapper}>
				<InfoText title={t('Platform')} value={t('Trade Locker')} />
				<InfoText
					mode='currency'
					title={t('Refundable Registration Fee')}
					value={56}
					locale={locale}
				/>
				<InfoText title={t('Max Daily Loss')} value='3' after='%' />
				<InfoText title={t('Profit Target')} value='10' after='%' />
				<InfoText title={t('Minimum Trading Days')} value='4' />
				<InfoText title={t('Duration')} value={t('Unlimited')} />
				<InfoText title={t('Leverage')} value='1:30' />
				<InfoText title={t('Max Overall Loss')} value='6' after='%' />
			</div>
		</Card>
	);
};
