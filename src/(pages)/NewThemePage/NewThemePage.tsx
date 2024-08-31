import { useLocale } from 'next-intl';
import { FC } from 'react';

import { Locale } from '@/shared/config/localeConfig';
import { Button } from '@/shared/ui/button';
import { Card } from '@/shared/ui/card';
import { Checkbox } from '@/shared/ui/checkbox';
import { Label } from '@/shared/ui/label';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

interface NewThemePageProps {
	className?: string;
}

export const NewThemePage: FC<NewThemePageProps> = ({}) => {
	const locale = useLocale() as Locale;

	return (
		<Card className='flex flex-col gap-8 p-10'>
			<div className='w-1/2'>
				<h3 className='mb-3 text-xl'>Challenge type</h3>
				<div className='grid grid-cols-3 gap-3'>
					<Button variant='secondary'>One phase</Button>
					<Button>Two phase</Button>
					<Button>Swing</Button>
				</div>
			</div>
			<div className='flex gap-5 items-end'>
				<div className='w-1/2'>
					<h3 className='mb-3 text-xl'>Challenge value</h3>
					<div className='grid grid-cols-3 gap-3'>
						<Button variant='secondary'>
							$ {formatLocaleNumber(locale, 6000)}
						</Button>
						<Button>$ {formatLocaleNumber(locale, 15000)}</Button>
						<Button>$ {formatLocaleNumber(locale, 25000)}</Button>
						<Button>$ {formatLocaleNumber(locale, 50000)}</Button>
						<Button>$ {formatLocaleNumber(locale, 100000)}</Button>
						<Button>$ {formatLocaleNumber(locale, 200000)}</Button>
					</div>
				</div>
				<div className='h-min w-1/5'>
					<div className='flex items-center gap-3 mb-2'>
						<Checkbox id='news' />
						<Label
							htmlFor='news'
							className='text-lg font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
						>
							New trading (+15
							<span className='text-accent'> %</span>)
						</Label>
					</div>
					<p className='text-sm font-normal text-muted-foreground'>
						Select to upgrade your challenge experience & unlock
						exclusive features
					</p>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-5'>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Platform
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						Trade Locker
					</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Refundable registration fee
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						<span className='text-xl text-accent mr-2'>$</span>
						{formatLocaleNumber(locale, 56)}
					</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Max daily loss
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						3<span className='text-xl text-accent ml-2'>%</span>
					</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Profit target
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						10<span className='text-xl text-accent ml-2'>%</span>
					</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Minimum trading days
					</p>
					<h2 className='text-3xl font-roboto font-medium'>4</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Duration
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						Unlimited
					</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Leverage
					</p>
					<h2 className='text-3xl font-roboto font-medium'>1:30</h2>
				</div>
				<div>
					<p className='text-sm text-muted-foreground mb-1.5'>
						Max overall
					</p>
					<h2 className='text-3xl font-roboto font-medium'>
						6<span className='text-xl text-accent ml-2'>%</span>
					</h2>
				</div>
			</div>
		</Card>
	);
};
