import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { Flex, FlexProps } from '@/shared/ui';
import { Button } from '@/shared/ui/button';

type SizeType = 'xs' | 'sm' | 'md' | 'lg';

interface SocialButtonsProps {
	size?: SizeType;
	gap?: FlexProps['gap'];
}

export const SocialButtons: FC<SocialButtonsProps> = ({ size = 'md', gap }) => {
	const sizeIcon: Record<SizeType, number> = {
		xs: 16,
		sm: 20,
		md: 24,
		lg: 32,
	};

	return (
		<Flex gap={gap}>
			<Button className={size === 'sm' ? 'size-8' : ''} size='icon'>
				<Instagram size={sizeIcon[size]} />
			</Button>
			<Button className={size === 'sm' ? 'size-8' : ''} size='icon'>
				<Image
					src='/telegram.svg'
					alt='Telegram'
					width={sizeIcon[size]}
					height={sizeIcon[size]}
				/>
			</Button>
		</Flex>
	);
};
