import { FC } from 'react';

import { Button, DatePickerWithRange, Flex, Input } from '@/shared/ui';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select';
import { isEmptyString } from '@/shared/utils/isEmptyString';
import { cn } from '@/shared/utils/utils';

import { IOptionSort } from '../../model/optionSort';

interface BillingSortProps {
	options: IOptionSort;
	clearFilters: () => void;
}

export const BillingSort: FC<BillingSortProps> = ({
	options,
	clearFilters,
}) => {
	const { search, statusSort, paymentSort, calendarRange } = options;

	const isSorted =
		!isEmptyString(search.value) ||
		!isEmptyString(statusSort.value) ||
		!isEmptyString(paymentSort.value) ||
		calendarRange.value.from;

	return (
		<Flex align='start' gap={16} max>
			<div className='grid grid-cols-4 gap-4'>
				<Input
					value={search.value}
					onChange={search.onChange}
					placeholder='Order number'
					className={
						search.value && 'bg-secondary border-none text-secondary-foreground'
					}
				/>
				<DatePickerWithRange
					value={calendarRange.value}
					onValueChange={calendarRange.onChange}
				/>
				<Select value={statusSort.value} onValueChange={statusSort.onChange}>
					<SelectTrigger
						className={cn(
							'bg-background border border-input text-muted-foreground',
							{
								'bg-secondary border-none text-secondary-foreground':
									statusSort.value,
							},
						)}
					>
						<SelectValue placeholder='Status' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='expired'>Expired</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='incomplete'>Payment incomplete</SelectItem>
					</SelectContent>
				</Select>
				<Select value={paymentSort.value} onValueChange={paymentSort.onChange}>
					<SelectTrigger
						className={cn(
							'bg-background border border-input text-muted-foreground',
							{
								'bg-secondary border-none text-secondary-foreground':
									paymentSort.value,
							},
						)}
					>
						<SelectValue
							className='bg-background'
							placeholder='Payment method'
						/>
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='crypto'>Crypto</SelectItem>
						<SelectItem value='card'>Card</SelectItem>
					</SelectContent>
				</Select>
			</div>
			{isSorted && (
				<Button variant='secondary' onClick={clearFilters}>
					Clear
				</Button>
			)}
		</Flex>
	);
};
