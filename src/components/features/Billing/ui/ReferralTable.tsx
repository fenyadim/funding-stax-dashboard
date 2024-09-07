import { AppTable } from '@/entities/AppTable';

import { IReferralPayouts, columnsReferral } from '../model/columnsReferral';
import { optionTableReferral } from '../model/optionTableReferral';

async function getData(): Promise<IReferralPayouts[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			status: 'waiting',
			date: new Date('08/17/2024 17:36'),
			userId: 'bee15494-cb4a-457',
			userName: 'Jenya Vasyuk',
			payment: 'Crypto Currency',
			amount: 1176,
		},
		{
			id: '728ed',
			status: 'completed',
			date: new Date('07/29/2024 19:39'),
			userId: 'bee15494-cb4a-457',
			userName: 'John Doe',
			payment: 'Crypto Currency',
			amount: 45,
		},
		{
			id: '728ed23',
			status: 'incomplete',
			date: new Date('07/25/2024 19:39'),
			userId: 'bee15494-cb4a-457',
			userName: 'Vasya Pupkin',
			payment: 'Crypto Currency',
			amount: 45,
		},
		{
			id: '7283',
			status: 'completed',
			date: new Date('07/30/2024 19:39'),
			userId: 'biba',
			userName: 'John Dasnter',
			payment: 'Crypto Currency',
			amount: 45245,
		},
		{
			id: '7283',
			status: 'processing',
			date: new Date('07/30/2024 19:39'),
			userId: 'biba',
			userName: 'John Dasntter',
			payment: 'Crypto Currency',
			amount: 45245,
		},
	];
}

export async function ReferralTable() {
	const data = await getData();

	return (
		<AppTable
			columns={columnsReferral}
			data={data}
			optionsFilter={optionTableReferral}
		/>
	);
}
