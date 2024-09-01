import { Bell, LogOut } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Input } from '@/shared/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

export default function Layout({ children }: { children: ReactNode }) {
	const locale = useLocale() as Locale;

	return (
		<>
			{/*<Header />*/}
			<div className='grid grid-cols-[350px_1fr] gap-4 items-center mb-4 pt-4 px-6'>
				<Link className='justify-self-center' href='/'>
					<Image src={'/logo.svg'} alt='Funding Stax' width={149} height={63} />
				</Link>
				<div className='flex justify-between items-center'>
					<div className=''>
						<h3 className='text-2xl'>Good morning, John!</h3>
						<p className='text-base text-muted-foreground'>
							10:00 • 1 December 2024
						</p>
					</div>
					<Input variant='dark' className='max-w-md' placeholder='Search...' />
					<Button size='icon'>
						<Bell />
					</Button>
					<div className='flex gap-3 items-center'>
						<Avatar>
							<AvatarImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwq7veP7WNzW-9UA4KJLXesrdwyp1GVURweg&sF' />
							<AvatarFallback>JD</AvatarFallback>
						</Avatar>
						<div>
							<h2 className='text-lg'>John Doe</h2>
							<p className='text-sm text-muted-foreground'>johndoe@gmail.com</p>
						</div>
					</div>
					<div className='flex gap-6'>
						<div>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder='EN' />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value='en'>EN</SelectItem>
									<SelectItem value='ru'>RU</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button size='icon'>
							<LogOut />
						</Button>
					</div>
				</div>
			</div>
			<div className='grid grid-cols-[350px_1fr] gap-4 px-6'>
				{/*<Sidebar />*/}
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
				<main className=''>
					{children}
					{/*<Footer />*/}
				</main>
			</div>
		</>
	);
}
