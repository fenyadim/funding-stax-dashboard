import { type Table } from '@tanstack/table-core';
import { ChangeEvent } from 'react';
import type { DateRange, SelectRangeEventHandler } from 'react-day-picker';

import { IBilling } from './columns';

type SearchOptionType = {
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type SortOptionType = {
	value: string;
	onChange: (value: string) => void;
};

type DateOptionType = {
	value: DateRange;
	onChange: SelectRangeEventHandler;
};

export interface IOptionSort {
	search: SearchOptionType;
	statusSort: SortOptionType;
	paymentSort: SortOptionType;
	calendarRange: DateOptionType;
}

const getValueOnColumn = <T>(
	table: Table<T>,
	column: keyof Omit<IBilling, 'id'>,
): string => (table.getColumn(column)?.getFilterValue() as string) ?? '';

const onFilterColumn = <T>(
	table: Table<T>,
	column: keyof Omit<IBilling, 'id'>,
	value: string,
) => {
	table.getColumn(column)?.setFilterValue(value === '' ? undefined : value);
};

export const optionSort = <T>(table: Table<T>): IOptionSort => ({
	search: {
		value: getValueOnColumn(table, 'order'),
		onChange: (e: ChangeEvent<HTMLInputElement>) =>
			onFilterColumn(table, 'order', e.target.value),
	},
	statusSort: {
		value: getValueOnColumn(table, 'status'),
		onChange: (value) => onFilterColumn(table, 'status', value),
	},
	paymentSort: {
		value: getValueOnColumn(table, 'payment'),
		onChange: (value) => onFilterColumn(table, 'payment', value),
	},
	calendarRange: {
		value: (table.getColumn('date')?.getFilterValue() as DateRange) ?? '',
		onChange: (range) => table.getColumn('date')?.setFilterValue(range),
	},
});
