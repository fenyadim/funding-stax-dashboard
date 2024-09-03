'use client';

import { Calendar as CalendarIcon } from 'lucide-react';
import { useFormatter } from 'next-intl';
import * as React from 'react';
import { DateRange } from 'react-day-picker';

import { cn } from '../utils/utils';

import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

export function DatePickerWithRange({
	className,
}: React.HTMLAttributes<HTMLDivElement>) {
	const format = useFormatter();
	const [date, setDate] = React.useState<DateRange | undefined>(undefined);

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-[300px] justify-start text-left font-normal',
							!date && 'text-muted-foreground',
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format.dateTime(date.from, {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}{' '}
									-{' '}
									{format.dateTime(date.to, {
										month: 'short',
										day: 'numeric',
										year: 'numeric',
									})}
								</>
							) : (
								format.dateTime(date.from, {
									month: 'short',
									day: 'numeric',
									year: 'numeric',
								})
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0 border-none' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
