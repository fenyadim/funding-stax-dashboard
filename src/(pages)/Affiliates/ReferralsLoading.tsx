import Image from 'next/image';
import { FC } from 'react';

import { CopyLink } from '@/entities/Referrals';
import { Block, Card, Flex, Skeleton } from '@/shared/ui';

interface ReferralsPageProps {}

export const ReferralsLoading: FC<ReferralsPageProps> = async () => {
	return (
		<Flex className='gap-12' direction='column' align='start'>
			<Flex className='pl-10 gap-12'>
				<Flex direction='column' justify='start' className='h-full gap-1'>
					<Skeleton className='w-[90px] h-[20px]' />
					<Skeleton className='w-[90px] h-[40px]' />
				</Flex>
				<Flex direction='column' justify='start' className='h-full gap-1'>
					<Skeleton className='w-[90px] h-[20px]' />
					<Skeleton className='w-[90px] h-[40px]' />
				</Flex>
			</Flex>
			<Block
				className='grid grid-cols-3 w-2/3'
				gap={16}
				align='stretch'
				title='Affiliates performance'
			>
				<Card className='flex-row items-center justify-between' size='small'>
					<Flex direction='column' justify='start' className='h-full gap-1'>
						<Skeleton className='w-[90px] h-[20px]' />
						<Skeleton className='w-[90px] h-[40px]' />
					</Flex>
					<Image
						src='/comissions.svg'
						alt='Commissions'
						width={72}
						height={72}
					/>
				</Card>
				<Card className='flex-row items-center justify-between' size='small'>
					<Flex direction='column' justify='start' className='h-full gap-1'>
						<Skeleton className='w-[90px] h-[20px]' />
						<Skeleton className='w-[90px] h-[40px]' />
					</Flex>
					<Image src='/referrals.svg' alt='Referrals' width={72} height={72} />
				</Card>
				<Card className='flex-row items-center justify-between' size='small'>
					<Flex direction='column' justify='start' className='h-full gap-1'>
						<Skeleton className='w-[90px] h-[20px]' />
						<Skeleton className='w-[90px] h-[40px]' />
					</Flex>
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
