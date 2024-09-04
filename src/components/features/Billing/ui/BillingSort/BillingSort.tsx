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
		<Flex direction='column' align='start' gap={16} max>
			<Flex className='w-full' gap={16}>
				<Input
					value={search.value}
					onChange={search.onChange}
					placeholder='Order number'
				/>
				<DatePickerWithRange
					value={calendarRange.value}
					onValueChange={calendarRange.onChange}
				/>
				<Select value={statusSort.value} onValueChange={statusSort.onChange}>
					<SelectTrigger>
						<SelectValue placeholder='Status' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='expired'>Expired</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='incomplete'>Payment incomplete</SelectItem>
					</SelectContent>
				</Select>
				<Select value={paymentSort.value} onValueChange={paymentSort.onChange}>
					<SelectTrigger>
						<SelectValue placeholder='Payment method' />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value='expired'>Expired</SelectItem>
						<SelectItem value='completed'>Completed</SelectItem>
						<SelectItem value='incomplete'>Payment incomplete</SelectItem>
					</SelectContent>
				</Select>
				{isSorted && (
					<Button variant='secondary' onClick={clearFilters}>
						Clear
					</Button>
				)}
			</Flex>
		</Flex>
	);
};
