'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';

import { Button } from '@/shared/ui';

export type Payment = {
	id: string;
	status: 'expired' | 'completed' | 'incomplete';
	date: string;
	order: string;
	product: string;
	payment: string;
	amount: number;
};

export const columns: ColumnDef<Payment>[] = [
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
	},
	{
		accessorKey: 'order',
		header: ({ column }) => (
			<Button
				variant='ghost'
				onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
			>
				Order
				<ArrowUpDown className='ml-2 h-4 w-4' />
			</Button>
		),
	},
	{
		accessorKey: 'product',
		header: 'Product type',
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
	},
	{
		accessorKey: 'View',
		cell: ({ row }) => {
			console.log(row.original);
			return <Button variant='secondary'>View</Button>;
		},
	},
];
