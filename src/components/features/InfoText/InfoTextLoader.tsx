import { Flex, Skeleton } from '@/shared/ui';

export const InfoTextLoader = () => {
	return (
		<Flex direction='column' align='start' gap={8}>
			<Skeleton className='w-[60px] h-[20px] rounded-full' />
			<Skeleton className='w-[175px] h-[36px] rounded-full' />
		</Flex>
	);
};
