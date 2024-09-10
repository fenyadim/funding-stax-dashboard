'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { FC, useState } from 'react';

import { PlatformItemType, PlatformOption } from '@/components/Platform';
import { InfoText } from '@/components/features';
import { Locale } from '@/shared/config/localeConfig';
import { ADOffer, Button, Card, Flex } from '@/shared/ui';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';

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

const PlatformCreateChallenge: FC<PlatformCreateChallengeProps> = ({
	locale,
}) => {
	const [type, setType] = useState<string>('one-phase');
	const [value, setValue] = useState<number>(6000);

	const t = useTranslations('PlatformPage');

	const challengeTypes: PlatformItemType<string>[] = [
		{ id: 'one-phase', name: t('One Phase') },
		{ id: 'two-phase', name: t('Two Phase') },
		{ id: 'swing', name: t('Swing') },
	];

	const setActiveHandler = (id: string) => {
		setType(id);
	};

	const setValueHandler = (id: number) => {
		setValue(id);
	};

	return (
		<Card className='w-full gap-5'>
			<Flex align='stretch' max>
				<Flex className='flex-1' direction='column' align='start' max gap={32}>
					<PlatformOption
						className='w-3/4'
						title={t('Challenge Type')}
						items={challengeTypes}
						idActive={type}
						setIdActive={setActiveHandler}
						info={
							'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
						}
					/>
					<PlatformOption
						className='w-3/4'
						title={t('Challenge Value')}
						items={challengeValues}
						idActive={value}
						setIdActive={setValueHandler}
						locale={locale}
						info={
							'Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.Пробная информация, чтоб что-то попробовать.'
						}
					/>
					<Flex className='w-3/4' justify='between' gap={32}>
						<div className='h-min w-1/2'>
							<div className='flex items-center gap-3 mb-2'>
								<Checkbox id='news' />
								<Label
									htmlFor='news'
									className='text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
								>
									New trading (+15
									<span className='text-accent'>%</span>)
								</Label>
							</div>
							<p className='text-sm font-normal text-muted-foreground'>
								Select to upgrade your challenge experience & unlock exclusive
								features
							</p>
						</div>
						<Button className='flex-1' variant='secondary' asChild>
							<Link href='/buy-challenge'>Buy challenge</Link>
						</Button>
					</Flex>
				</Flex>
				<ADOffer className='bg-background h-full gap-4' />
			</Flex>
			<div className='grid grid-cols-4 gap-4'>
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

export default PlatformCreateChallenge;
