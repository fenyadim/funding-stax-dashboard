import { FC } from 'react';

import { Button } from '@/shared/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/ui/tooltip';

interface TooltipButtonProps {
	text: string;
	size: 'default' | 'sm';
}

export const TooltipButton: FC<TooltipButtonProps> = ({
	text,
	size = 'default',
}) => {
	const sizeClass = {
		default: 'size-8 text-xl',
		sm: 'size-6 text-lg p-0',
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
