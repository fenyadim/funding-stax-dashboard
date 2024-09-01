import Link from 'next/link';
import { FC } from 'react';

import { Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/button';

export const Banner: FC = () => {
	return (
		<Flex
			className='p-6 bg-[url("/bannerBack.jpg")] rounded-3xl'
			gap={8}
			direction='column'
		>
			<h3 className='text-center'>Get a Market Head Start with up to $200K!</h3>
			<Button size='lg' variant='secondary'>
				New Challenge
			</Button>
			<Link href='#'>
				<Button className='uppercase' variant='link'>
					Learn more
				</Button>
			</Link>
		</Flex>
	);
};
