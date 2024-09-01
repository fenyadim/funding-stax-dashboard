import { FC } from 'react';

import { Button } from '@/shared/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui/tooltip';

type SizesType = 'default' | 'sm' | 'md' | 'xl';

interface TooltipButtonProps {
	text: string;
	size?: SizesType;
}

export const TooltipButton: FC<TooltipButtonProps> = ({
	text,
	size = 'default',
}) => {
	const sizeClass: Record<SizesType, string> = {
		default: 'size-8 text-xl',
		sm: 'size-6 text-lg p-0',
		md: 'size-6 text-xl p-0',
		xl: 'size-9 text-2xl p-0',
	};

	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button className={sizeClass[size]}>!</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{text}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
