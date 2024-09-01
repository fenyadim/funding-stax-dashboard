import { cva } from 'class-variance-authority';
import { FC } from 'react';

import { TooltipButton } from '@/components/features';
import { Flex } from '@/shared/ui';
import { cn } from '@/shared/utils/utils';

import { modeElement } from './elements';
import { PlatformStatisticProps } from './types';

export const infoTextVariants = cva(
	'[&_h3]:text-accent [&_span]:text-foreground',
	{
		variants: {
			size: {
				xl: '[&_h3]:text-2xl  [&_h3>span]:text-4xl ',
				default: '[&_h3]:text-xl  [&_h3>span]:text-3xl ',
				md: '[&_h3]:text-xl  [&_h3>span]:text-2xl ',
				sm: '[&_h3]:text-lg  [&_h3>span]:text-xl ',
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
		<Flex align='start' direction='column' gap={4}>
			<Flex gap={8}>
				<p className='text-sm text-muted-foreground'>{title}</p>
				{info && (
					<TooltipButton size={size as NonNullable<typeof size>} text={info} />
				)}
			</Flex>
			<div
				className={cn(
					'font-roboto flex gap-4',
					infoTextVariants({ size, align, className }),
				)}
			>
				{modeElement(mode, value, before, after, locale, percentOf)}
			</div>
		</Flex>
	);
};
