import Link from 'next/link';
import { FC } from 'react';

import { SocialButtons } from '@/components/features';
import { Flex } from '@/shared/ui';
import { Button } from '@/shared/ui/button';

export const Footer: FC = () => {
	return (
		<Flex
			className='pt-5 [&>p]:text-sm font-normal text-muted-foreground'
			gap={32}
		>
			<p>© 2022. All rights reserved.</p>
			<SocialButtons gap={16} size='sm' />
			<p>
				For detailed Terms & Conditions and other relevant information, please
				visit our
				<Link href='#'>
					<Button className='text-sm font-normal px-1 py-0' variant='link'>
						website
					</Button>
				</Link>
			</p>
		</Flex>
	);
};
