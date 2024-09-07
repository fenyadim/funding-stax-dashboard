'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type ILogColumns = {
	id: string;
	open: string;
	symbol: string;
	positionId: string;
	type: string;
	volume: string;
	price: string;
	sl: string;
	tp: string;
	close: string;
	closePrice: string;
	pl: string;
	change: string;
};

export const columnsLog: ColumnDef<ILogColumns>[] = [
	{
		accessorKey: 'open',
		header: 'Open',
	},
	{
		accessorKey: 'symbol',
		header: 'Symbol',
	},
	{
		accessorKey: 'positionId',
		header: 'Position ID',
	},
	{
		accessorKey: 'type',
		header: 'Type',
	},
	{
		accessorKey: 'volume',
		header: 'Volume',
	},
	{
		accessorKey: 'price',
		header: 'Price',
	},
	{
		accessorKey: 'sl',
		header: 'S/L',
	},
	{
		accessorKey: 'tp',
		header: 'T/P',
	},
	{
		accessorKey: 'close',
		header: 'Close',
	},
	{
		accessorKey: 'closePrice',
		header: 'Close Price',
	},
	{
		accessorKey: 'pl',
		header: 'P/L',
	},
	{
		accessorKey: 'change',
		header: 'Change',
	},
];
