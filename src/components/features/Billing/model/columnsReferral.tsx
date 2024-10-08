'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/shared/ui';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';
import { cn } from '@/shared/utils/utils';

export type IReferralPayouts = {
	id: string;
	status: 'waiting' | 'processing' | 'completed' | 'incomplete';
	date: Date;
	userId: string;
	userName: string;
	payment: string;
	amount: number;
};

const statusStyle: Record<IReferralPayouts['status'], string> = {
	completed: 'bg-accent',
	incomplete: 'bg-error',
	waiting: 'bg-muted',
	processing: 'bg-amber-300',
};

export const columnsReferral: ColumnDef<IReferralPayouts>[] = [
	{
		accessorKey: 'status',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Status
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
		cell: ({ row }) => (
			<div
				className={cn(
					'font-semibold text-accent-foreground p-2 rounded-full capitalize',
					statusStyle[row.original.status],
				)}
			>
				{row.original.status}
			</div>
		),
	},
	{
		accessorKey: 'date',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Date
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
		filterFn: (row, _, filterValue) => {
			const filterFromDate = filterValue.from;
			const filterToDate = filterValue.to;

			if (filterFromDate || filterToDate) {
				if (filterFromDate && filterToDate) {
					return (
						row.original.date >= filterValue.from &&
						row.original.date <= filterValue.to
					);
				} else if (filterFromDate) {
					return row.original.date >= filterValue.from;
				} else {
					return row.original.date <= filterValue.to;
				}
			} else {
				return true;
			}
		},
		cell: ({ row }) =>
			Intl.DateTimeFormat('en', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
			}).format(row.original.date),
	},
	{
		accessorKey: 'userId',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				ID
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
	},
	{
		accessorKey: 'userName',
		header: 'Full name',
	},
	{
		accessorKey: 'payment',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Payment method
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
	},
	{
		accessorKey: 'amount',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Amount
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
		cell: ({ row }) => `$ ${formatLocaleNumber('en', row.original.amount)}`,
	},
	{
		accessorKey: 'Claim',
		header: '',
		cell: ({ row }) => {
			const status = row.original.status;
			return (
				<Button variant='secondary' disabled={status !== 'waiting'}>
					Claim
				</Button>
			);
		},
	},
];
