import { FC } from 'react';

import { Flex, FlexProps } from '@/shared/ui';

interface BlockProps extends FlexProps {
	title: string;
}

export const Block: FC<BlockProps> = ({ children, title, ...props }) => {
	return (
		<Flex direction='column' align='start' gap={8} max>
			<h2 className='text-2xl pl-10'>{title}</h2>
			<Flex {...props}>{children}</Flex>
		</Flex>
	);
};
