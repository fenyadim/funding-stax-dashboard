'use client';

import type { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/shared/ui';
import { formatLocaleNumber } from '@/shared/utils/formatLocale';

export type IReferralsList = {
	id: string;
	name: string;
	joiningDate: Date;
	received: number;
};

export const columnsReferralsList: ColumnDef<IReferralsList>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'name',
		header: 'Full name',
	},
	{
		accessorKey: 'joiningDate',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Joining
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
		cell: ({ row }) =>
			Intl.DateTimeFormat('en', {
				day: 'numeric',
				month: 'short',
				year: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
			}).format(row.original.joiningDate),
	},
	{
		accessorKey: 'received',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Received
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
		cell: ({ row }) => `$ ${formatLocaleNumber('en', row.original.received)}`,
	},
];
