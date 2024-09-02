'use client';

import { ChevronDown } from 'lucide-react';
import { FC } from 'react';

import { useCollapseByUrl } from '@/shared/hooks/useCollapseByUrl';
import {
	Button,
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/shared/ui';

import { MenuConfig } from '../../config';
import { SidebarLink } from '../SidebarLink/SidebarLink';

interface SidebarCollapseProps {
	name: string;
	pathname: string;
	submenu: Omit<MenuConfig, 'submenu'>[];
}

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
	name,
	submenu,
	pathname,
}) => {
	const { open, setOpen } = useCollapseByUrl('profile');

	return (
		<Collapsible open={open} onOpenChange={setOpen}>
			<CollapsibleTrigger asChild>
				<Button
					className='group relative w-full text-lg font-medium data-[state=open]:bg-secondary/80 data-[state=open]:text-accent'
					size='lg'
					variant='ghost'
				>
					{name}
					<ChevronDown className='absolute right-5 transition-opacity opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-180' />
				</Button>
			</CollapsibleTrigger>
			<CollapsibleContent className='overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down p-2 pb-0 *:mb-2'>
				{submenu.map(({ name, path }) => (
					<SidebarLink
						className='last:mb-0'
						key={path}
						path={path as string}
						name={name}
						isActive={pathname === path}
					/>
				))}
			</CollapsibleContent>
		</Collapsible>
	);
};
