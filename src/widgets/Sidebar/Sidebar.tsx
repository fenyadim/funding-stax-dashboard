import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FC } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

interface SidebarProps {
	className?: string;
}

export const Sidebar: FC<SidebarProps> = ({}) => {
	const locale = useLocale() as Locale;

	return (
		<Card className='flex flex-col items-center gap-5 p-8 h-min'>
			<h2 className='text-3xl font-roboto'>
				{formatLocaleNumber(locale, 5665.67)}
				<span className='text-accent ml-1'>$</span>
			</h2>
			<nav className='w-full'>
				<ul className='flex flex-col gap-3'>
					<li>
						<Link className='block focus-visible:outline-none ' href='/'>
							<Button
								className='w-full text-accent bg-secondary hover:bg-secondary/80 relative before:content-arrow before:absolute before:top-1/2 before:right-5 before:-translate-y-1/2 before:h-[18px] before:scale-75'
								variant='ghost'
								size='lg'
							>
								New Challenge
							</Button>
						</Link>
					</li>
					<li>
						<Link href='#' className='block focus-visible:outline-none '>
							<Button
								className='text-lg font-medium w-full'
								variant='ghost'
								size='lg'
							>
								Affiliates
							</Button>
						</Link>
					</li>
					<li>
						<Link href='#' className='block focus-visible:outline-none '>
							<Button
								className='text-lg font-medium w-full'
								variant='ghost'
								size='lg'
							>
								Leaderboards
							</Button>
						</Link>
					</li>
					<li>
						<Link href='#' className='block focus-visible:outline-none '>
							<Button
								className='text-lg font-medium w-full'
								variant='ghost'
								size='lg'
							>
								Profile
							</Button>
						</Link>
					</li>
					<li>
						<Link href='#' className='block focus-visible:outline-none '>
							<Button
								className='text-lg font-medium w-full'
								variant='ghost'
								size='lg'
							>
								FAQ
							</Button>
						</Link>
					</li>
				</ul>
			</nav>
			<div className='flex flex-col gap-3 p-6 bg-[url("/bannerBack.jpg")] rounded-3xl'>
				<h3 className='text-center'>
					Get a market head start with up to $200k!
				</h3>
				<Button size='lg' variant='secondary'>
					New challenge
				</Button>
				<Button className='uppercase' variant='link'>
					Learn more
				</Button>
			</div>
		</Card>
	);
};
