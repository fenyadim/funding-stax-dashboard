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
}

export const TooltipButton: FC<TooltipButtonProps> = ({ text }) => {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button className='size-8 text-xl'>!</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{text}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
