import { VariantProps, cva } from 'class-variance-authority';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { Card as CardWrapper } from '@/shared/ui/card';
import { cn } from '@/shared/utils/utils';

export interface CardProps
	extends HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof cardVariants> {
	children: ReactNode;
}

const cardVariants = cva('flex', {
	variants: {
		size: {
			small: 'p-6',
			default: 'p-10',
		},
		variant: {
			negative: 'bg-error/15 border border-error',
			positive: 'bg-accent/15 border border-accent',
		},
	},
	defaultVariants: {
		size: 'default',
	},
});

export const Card: FC<CardProps> = ({
	children,
	size,
	variant,
	className,
	...props
}) => {
	return (
		<CardWrapper
			className={cn(cardVariants({ size, variant, className }))}
			{...props}
		>
			{children}
		</CardWrapper>
	);
};
