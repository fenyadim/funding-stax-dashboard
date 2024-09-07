import { FC } from 'react';

import { AppTable } from '@/entities/AppTable';

import { IUserColumns, columnsUser } from '../model/columnsUser';

async function getData(): Promise<IUserColumns[]> {
	// Fetch data from your API here.
	return [
		{
			id: '1232',
			name: 'Vadim',
		},
		{
			id: '12345',
			name: 'Jorik',
		},
		{
			id: '123456',
			name: 'John',
		},
	];
}

export const UserTable: FC = async () => {
	const data = await getData();

	return <AppTable columns={columnsUser} data={data} />;
};
