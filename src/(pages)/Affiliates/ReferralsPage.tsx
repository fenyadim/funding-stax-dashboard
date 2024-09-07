import { getLocale } from 'next-intl/server';
import Image from 'next/image';
import { FC } from 'react';

import { InfoText } from '@/components/features';
import { CopyLink } from '@/entities/Referrals';
import { Locale } from '@/shared/config/localeConfig';
import { Block, Card, Flex } from '@/shared/ui';

interface ReferralsPageProps {}

export const ReferralsPage: FC<ReferralsPageProps> = async ({}) => {
	const locale = (await getLocale()) as Locale;

	return (
		<Flex className='gap-12' direction='column' align='start'>
			<Flex className='pl-10 gap-12'>
				<InfoText
					mode='currency'
					locale={locale}
					value={0}
					title='Total payouts'
					size='xl'
				/>
				<InfoText
					mode='currency'
					locale={locale}
					value={0}
					title='Payouts pending'
					size='xl'
				/>
			</Flex>
			<Block
				className='grid grid-cols-3 w-2/3'
				gap={16}
				align='stretch'
				title='Affiliates performance'
			>
				<Card className='flex-row items-center justify-between' size='small'>
					<InfoText
						mode='currency'
						locale={locale}
						value={0}
						title='Commissions'
					/>
					<Image
						src='/comissions.svg'
						alt='Commissions'
						width={72}
						height={72}
					/>
				</Card>
				<Card className='flex-row items-center justify-between' size='small'>
					<InfoText value='0' title='Referrals' />
					<Image src='/referrals.svg' alt='Referrals' width={72} height={72} />
				</Card>
				<Card className='flex-row items-center justify-between' size='small'>
					<InfoText mode='currency' locale={locale} value={0} title='Payouts' />
					<Image src='/payouts.svg' alt='Payouts' width={72} height={72} />
				</Card>
			</Block>
			<Block align='stretch' gap={16} title='Affiliate Link'>
				<CopyLink
					label='Affiliates ID'
					text='e237a1ad-0c38-4260-9669-f4c39a75bdef'
				/>
				<CopyLink
					label='Link'
					text='https://prop.covefunded.com/buy-challenge/?referral=c2435371'
				/>
			</Block>
			<Block direction='column' title='Manage your BTC payout address'>
				<CopyLink
					text='bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
					label='BTC address'
					isEditable
				/>
			</Block>
		</Flex>
	);
};
