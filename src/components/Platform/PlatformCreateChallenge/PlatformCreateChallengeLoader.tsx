import { InfoTextLoader } from '@/components/features/InfoText';
import { Card, Flex, Skeleton } from '@/shared/ui';
import { fillingArray } from '@/shared/utils/fillingArray';

export const PlatformCreateChallengeLoader = () => {
	return (
		<Card className='w-full gap-5'>
			<Flex direction='column' align='start' gap={16}>
				<Skeleton className='w-[145px] h-[28px]' />
				<Flex className='w-1/2' gap={8} max>
					<Skeleton className='w-full h-[44px] rounded-full' />
					<Skeleton className='w-full h-[44px] rounded-full' />
					<Skeleton className='w-full h-[44px] rounded-full' />
				</Flex>
			</Flex>
			<Flex direction='column' align='start' gap={16} max>
				<Skeleton className='w-[145px] h-[28px]' />
				<Flex className='grid grid-cols-3 w-1/2' gap={8}>
					{fillingArray(6).map((_, index) => (
						<Skeleton key={index} className='w-full h-[44px] rounded-full' />
					))}
				</Flex>
			</Flex>
			<div className='grid grid-cols-4 gap-4'>
				{fillingArray(8).map((_, index) => (
					<InfoTextLoader key={index} />
				))}
			</div>
		</Card>
	);
};
