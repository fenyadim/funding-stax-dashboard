'use client';

import {
	type ColumnDef,
	type ColumnFiltersState,
	type SortingState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { Card } from '@/components/ui';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/shared/ui';

import { optionSort } from '../../model/optionSort';
import { BillingSort } from '../BillingSort/BillingSort';

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function BillingTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

	const table = useReactTable<TData>({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: { sorting, columnFilters },
	});

	const clearFilters = () => {
		setColumnFilters([]);
	};

	return (
		<>
			<BillingSort options={optionSort(table)} clearFilters={clearFilters} />
			<Card className='p-0' size='small'>
				<Table className='overflow-hidden rounded-3xl'>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow
								className='bg-secondary border-muted-foreground hover:bg-secondary overflow-hidden'
								key={headerGroup.id}
							>
								{headerGroup.headers.map((header) => (
									<TableHead
										className='text-base font-semibold text-center'
										key={header.id}
									>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && 'selected'}
									className='hover:bg-accent/20 border-b-muted-foreground'
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell className='text-center' key={cell.id}>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className='h-24 text-center'
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
