import { FC } from 'react';

import { AppTable } from '@/shared/ui';

import { IReferralsList, columnsReferralsList } from '../../model/column';

const data: IReferralsList[] = [
	{
		id: '123',
		name: 'John Doe',
		joiningDate: new Date(),
		received: 1000,
	},
	{
		id: '12',
		name: 'John Doe',
		joiningDate: new Date(),
		received: 1000,
	},
];

export const ReferralsListTable: FC = () => {
	return (
		<AppTable
			columns={columnsReferralsList}
			data={data}
			optionsFilter={{
				search: {
					column: 'name',
					label: 'Search',
				},
				calendarRange: {
					column: 'joiningDate',
				},
			}}
		/>
	);
};
