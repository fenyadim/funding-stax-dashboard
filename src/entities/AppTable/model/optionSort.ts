import { type Table } from '@tanstack/table-core';
import { ChangeEvent } from 'react';
import type { DateRange, SelectRangeEventHandler } from 'react-day-picker';

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

const getValueOnColumn = <T>(table: Table<T>, column: keyof T): string =>
    (table.getColumn(column as string)?.getFilterValue() as string) ?? '';

const onFilterColumn = <T>(table: Table<T>, column: keyof T, value: string) => {
    table
        .getColumn(column as string)
        ?.setFilterValue(value === '' ? undefined : value);
};

export const searchSettings = <T>(
    table: Table<T>,
    column: keyof T,
): SearchOptionType => ({
    value: getValueOnColumn(table, column),
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
        onFilterColumn(table, column, e.target.value),
});

export const calendarRangeSettings = <T>(
    table: Table<T>,
    column: keyof T,
): DateOptionType => ({
    value:
        (table.getColumn(column as string)?.getFilterValue() as DateRange) ?? '',
    onChange: (range) => table.getColumn(column as string)?.setFilterValue(range),
});

export const selectSettings = <T>(
    table: Table<T>,
    column: keyof T,
): SortOptionType => ({
    value: getValueOnColumn(table, column),
    onChange: (value) => onFilterColumn(table, column, value),
});