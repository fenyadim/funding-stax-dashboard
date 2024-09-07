import type { Table } from '@tanstack/table-core';

import {
	calendarRangeSettings,
	searchSettings,
} from '@/components/features/Billing/model/optionSort';
import { Button, DatePickerWithRange, Flex, Input } from '@/shared/ui';

export interface IOptions<T> {
	search?: {
		column: keyof T;
		label: string;
	};
	calendarRange?: {
		column: keyof T;
	};
	selectSort?: SelectSortType<T>[];
}

type SelectSortType<T> = {
	column: keyof T;
	label: string;
	options: {
		key: string;
		value: string;
	}[];
};

interface AppTableSortProps<T> {
	table: Table<T>;
	options?: IOptions<T>;
	clearFilters: () => void;
}

export const AppTableSort = <T,>({
	table,
	options,
	clearFilters,
}: AppTableSortProps<T>) => {
	// const isSorted =
	// 	!isEmptyString(search.value) ||
	// 	!isEmptyString(statusSort.value) ||
	// 	!isEmptyString(paymentSort.value) ||
	// 	calendarRange.value.from;

	const searchElement = () => {
		if (options?.search) {
			const setting = searchSettings<T>(table, options.search.column);
			return (
				<Input
					value={setting.value}
					onChange={setting.onChange}
					placeholder={options.search.label}
					className={
						setting.value &&
						'bg-secondary border-none text-secondary-foreground'
					}
				/>
			);
		}
	};

	const datePickerElement = () => {
		if (options?.calendarRange) {
			const setting = calendarRangeSettings<T>(
				table,
				options.calendarRange.column,
			);
			return (
				<DatePickerWithRange
					value={setting.value}
					onValueChange={setting.onChange}
				/>
			);
		}
	};

	// 	const datePicker = () => {
	// 		if (options?.calendarRange) {
	// 			return (
	// 				<DatePickerWithRange
	// 					value={settingElements.calendarRange.value}
	// 					onValueChange={settingElements.calendarRange.onChange}
	// 				/>
	// 			);
	// 		}
	// 	};
	// };

	return (
		<Flex className='pl-1' align='start' gap={16} max>
			<div className={`grid grid-cols-${3} gap-4`}>
				{searchElement()}
				{datePickerElement()}
				{/*{datePicker()}*/}
				{/*<Select value={statusSort.value} onValueChange={statusSort.onChange}>*/}
				{/*	<SelectTrigger*/}
				{/*		className={cn(*/}
				{/*			'bg-background border border-input text-muted-foreground',*/}
				{/*			{*/}
				{/*				'bg-secondary border-none text-secondary-foreground':*/}
				{/*					statusSort.value,*/}
				{/*			},*/}
				{/*		)}*/}
				{/*	>*/}
				{/*		<SelectValue placeholder='Status' />*/}
				{/*	</SelectTrigger>*/}
				{/*	<SelectContent>*/}
				{/*		<SelectItem value='expired'>Expired</SelectItem>*/}
				{/*		<SelectItem value='completed'>Completed</SelectItem>*/}
				{/*		<SelectItem value='incomplete'>Payment incomplete</SelectItem>*/}
				{/*	</SelectContent>*/}
				{/*</Select>*/}
				{/*<Select value={paymentSort.value} onValueChange={paymentSort.onChange}>*/}
				{/*	<SelectTrigger*/}
				{/*		className={cn(*/}
				{/*			'bg-background border border-input text-muted-foreground',*/}
				{/*			{*/}
				{/*				'bg-secondary border-none text-secondary-foreground':*/}
				{/*					paymentSort.value,*/}
				{/*			},*/}
				{/*		)}*/}
				{/*	>*/}
				{/*		<SelectValue*/}
				{/*			className='bg-background'*/}
				{/*			placeholder='Payment method'*/}
				{/*		/>*/}
				{/*	</SelectTrigger>*/}
				{/*	<SelectContent>*/}
				{/*		<SelectItem value='crypto'>Crypto</SelectItem>*/}
				{/*		<SelectItem value='card'>Card</SelectItem>*/}
				{/*	</SelectContent>*/}
				{/*</Select>*/}
			</div>
			{/*{isSorted && (*/}
			<Button variant='secondary' onClick={clearFilters}>
				Clear
			</Button>
			{/*)}*/}
		</Flex>
	);
};
