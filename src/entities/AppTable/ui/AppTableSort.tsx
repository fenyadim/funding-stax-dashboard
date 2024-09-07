'use client';

import type { Table } from '@tanstack/table-core';

import {
    calendarRangeSettings,
    searchSettings,
    selectSettings
} from '../model/optionSort';
import { Button, DatePickerWithRange, Flex, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui';
import { cn } from '@/shared/utils/utils';
import { Fragment, useMemo } from 'react';

export interface IOptions<T> {
    /**
     * Поиск по таблице с помощью input
     * 
     * @param label Placeholder поиска
     * @param column По какому столбцу осуществлять поиск
     */
    search?: {
        column: keyof T;
        label: string;
    };
    /**
     * Поиск по таблице с помощью календаря
     * 
     * @param column По какому столбцу осуществлять поиск
     */
    calendarRange?: {
        column: keyof T;
    };
    /**
     * Поиск по таблице с помощью select
     */
    selectSort?: SelectSortType<T>[];
}

type SelectSortType<T> = {
    /**
     * @param column По какому столбцу осуществлять поиск
     */
    column: keyof T;
    /**
     * @param label Label поиска
     */
    label: string;
    /**
     * @param variants Варианты
     */
    variants: {
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
    const isSorted = useMemo(() => table.getState().columnFilters, [table, table.getState().columnFilters])
    const countColumns = useMemo(() => options && (options.selectSort ? Object.keys(options).length + (options.selectSort.length - 1) : Object.keys(options).length), [options])

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

    const selectElement = ({ column, label, variants }: SelectSortType<T>) => {
        if (options?.selectSort) {
            const setting = selectSettings<T>(table, column);
            return (
                <Select value={setting.value} onValueChange={setting.onChange}>
                    <SelectTrigger
                        className={cn(
                            'bg-background border border-input text-muted-foreground',
                            {
                                'bg-secondary border-none text-secondary-foreground':
                                    setting.value,
                            },
                        )}
                    >
                        <SelectValue
                            className='bg-background'
                            placeholder={label}
                        />
                    </SelectTrigger>
                    <SelectContent>
                        {variants.map(({ key, value }) => (
                            <SelectItem key={key} value={key}>{value}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            );
        }
    };

    return (
        <Flex className='pl-1' align='start' gap={16} max>
            <div className={`grid grid-cols-${countColumns} gap-4`}>
                {searchElement()}
                {datePickerElement()}
                {options?.selectSort?.map((items) => (
                    <Fragment key={items.column as string}>
                        {selectElement(items)}
                    </Fragment>
                ))}
            </div>
            {isSorted.length > 0 && (
                <Button variant='secondary' onClick={clearFilters}>
                    Clear
                </Button>
            )}
        </Flex>
    );
}