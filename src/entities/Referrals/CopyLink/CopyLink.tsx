'use client';

import { Copy } from 'lucide-react';
import { FC } from 'react';

import { Card } from '@/components/ui';
import { Button } from '@/shared/ui';
import { copyToClipboard } from '@/shared/utils/copyToClipboard';
import { cn } from '@/shared/utils/utils';

interface CopyLinkProps {
	label?: string;
	text: string;
	className?: string;
}

export const CopyLink: FC<CopyLinkProps> = ({ label, text, className }) => {
	return (
		<div className={cn('w-full', className)}>
			<h3 className='text-base text-muted-foreground ml-5'>{label}</h3>
			<Card
				className='flex-row justify-between items-center rounded-full p-3 px-5'
				size='small'
			>
				<p className='text-base text-foreground/80 truncate'>{text}</p>
				<Button
					variant='ghost'
					size='icon'
					onClick={() => copyToClipboard(text)}
				>
					<Copy />
				</Button>
			</Card>
		</div>
	);
};
