import { cva } from 'class-variance-authority';
import { FC } from 'react';

import { TooltipButton } from '@/components/features';
import { Flex } from '@/shared/ui';
import { cn } from '@/shared/utils/utils';

import { modeElement } from './elements';
import { PlatformStatisticProps } from './types';

export const infoTextVariants = cva(
	'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			size: {
				default:
					'[&_h3]:text-xl [&_h3]:text-accent [&_h3>span]:text-3xl [&_span]:text-foreground',
				md: '[&_h3]:text-xl [&_h3]:text-accent [&_h3>span]:text-2xl [&_span]:text-foreground',
				sm: '[&_h3]:text-lg [&_h3]:text-accent [&_h3>span]:text-xl [&_span]:text-foreground',
			},
			align: {
				start: 'items-start',
				center: 'items-center',
				end: 'items-end',
			},
		},
		defaultVariants: {
			align: 'start',
			size: 'default',
		},
	},
);

export const InfoText: FC<PlatformStatisticProps> = ({
	title,
	value,
	before,
	after,
	locale,
	size,
	mode = 'text',
	align,
	info,
	percentOf,
	className,
}) => {
	return (
		<Flex align='start' direction='column' gap={8}>
			<Flex gap={8}>
				<p className='text-sm text-muted-foreground'>{title}</p>
				{info && <TooltipButton text={info} />}
			</Flex>
			<div
				className={cn(
					'font-roboto',
					infoTextVariants({ size, align, className }),
				)}
			>
				{modeElement(mode, value, before, after, locale, percentOf)}
			</div>
		</Flex>
	);
};
