'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import { Banner } from '@/components/Banner/Banner';
import styles from '@/components/Sidebar/Sidebar.module.scss';
import { SocialButtons } from '@/components/features';
import { Locale } from '@/shared/config/localeConfig';
import { routeConfig } from '@/shared/config/routeConfig';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { cn } from '@/shared/utils/utils';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({}) => {
	const locale = useLocale() as Locale;
	const pathname = usePathname();

	return (
		<Card className='flex flex-col items-center gap-5 p-8 h-min'>
			<h2 className='text-3xl font-roboto'>
				{formatLocaleNumber(locale, 5665.67)}
				<span className='text-accent ml-1'>$</span>
			</h2>
			<nav className='w-full'>
				<ul className='flex flex-col gap-3'>
					{routeConfig().map(({ path, name }) => (
						<li
							className={pathname === path ? styles.activeTab : ''}
							key={path}
						>
							<Link href={path} className='block focus-visible:outline-none'>
								<Button
									className={cn('text-lg font-medium w-full', {
										'text-accent bg-secondary hover:bg-secondary/80 relative before:content-arrow before:absolute before:top-1/2 before:right-5 before:-translate-y-1/2 before:h-[18px] before:scale-75':
											pathname === path,
									})}
									variant='ghost'
									size='lg'
								>
									{name}
								</Button>
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<SocialButtons gap={32} />
			<Banner />
		</Card>
	);
};
