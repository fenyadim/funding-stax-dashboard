import Link from 'next/link';
import { FC } from 'react';

import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/utils/utils';

interface SidebarLinkProps {
	path: string;
	name: string;
	isActive?: boolean;
	className?: string;
}

export const SidebarLink: FC<SidebarLinkProps> = ({
	path,
	name,
	isActive,
	className,
}) => {
	return (
		<Button
			className={cn(
				'text-lg font-medium w-full',
				{
					'text-accent bg-secondary hover:bg-secondary/80 relative before:content-arrow before:absolute before:top-[48%] before:right-5 before:block before:-translate-y-1/2 before:h-[18px] before:scale-75':
						isActive,
				},
				className,
			)}
			variant='ghost'
			size='lg'
			asChild
		>
			<Link href={path}>{name}</Link>
		</Button>
	);
};
