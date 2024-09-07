'use client';

import type { ColumnDef } from '@tanstack/react-table';

export type IUserColumns = {
	id: string;
	name: string;
};

export const columnsUser: ColumnDef<IUserColumns>[] = [
	{
		accessorKey: 'id',
		header: 'ID',
	},
	{
		accessorKey: 'name',
		header: 'Full name',
	},
];
