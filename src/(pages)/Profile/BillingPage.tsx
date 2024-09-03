import { BillingSort, BillingTable } from '@/components/features/Billing';
import { Payment, columns } from '@/components/features/Billing/model/columns';
import { Block } from '@/components/ui';

async function getData(): Promise<Payment[]> {
	// Fetch data from your API here.
	return [
		{
			id: '728ed52f',
			status: 'expired',
			date: '17/08/2024 17:36',
			order: 'bee15494-cb4a-457',
			product: 'Purchase - 200K Swing Challenge - TL Challenge',
			payment: 'Crypto Currency',
			amount: 1176,
		},
		{
			id: '728ed',
			status: 'completed',
			date: '29/07/2024 19:39',
			order: 'bee15494-cb4a-457',
			product: 'Purchase - 200K Swing Challenge - TL Challenge',
			payment: 'Crypto Currency',
			amount: 45,
		},
	];
}

export const BillingPage = async () => {
	const data = await getData();

	return (
		<Block
			title='Billing history'
			direction='column'
			align='stretch'
			gap={16}
			max
		>
			<BillingSort />
			<BillingTable data={data} columns={columns} />
		</Block>
	);
};
