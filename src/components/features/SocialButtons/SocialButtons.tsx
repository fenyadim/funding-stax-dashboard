import { Instagram } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';

import { Button, ButtonProps } from '@/components/ui';
import { Flex, FlexProps } from '@/shared/ui';

interface SocialButtonsProps {
	size?: ButtonProps['size'];
	gap?: FlexProps['gap'];
}

export const SocialButtons: FC<SocialButtonsProps> = ({
	size = 'medium',
	gap,
}) => {
	const sizeIcon: Record<Required<ButtonProps>['size'], number> = {
		extraSmall: 16,
		small: 20,
		medium: 24,
		large: 32,
	};

	return (
		<Flex gap={gap}>
			<Button isRound size={size}>
				<Instagram size={sizeIcon[size]} />
			</Button>
			<Button isRound size={size}>
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
