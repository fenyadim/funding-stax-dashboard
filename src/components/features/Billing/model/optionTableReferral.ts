import { IReferralPayouts } from '@/components/features/Billing/model/columnsReferral';
import { IOptions } from '@/entities/AppTable';

export const optionTableReferral: IOptions<IReferralPayouts> = {
	search: {
		label: 'ID search',
		column: 'userId',
	},
	calendarRange: {
		column: 'date',
	},
	selectSort: [
		{
			label: 'Status',
			column: 'status',
			variants: [
				{
					key: 'waiting',
					value: 'Waiting',
				},
				{
					key: 'processing',
					value: 'Processing',
				},
				{
					key: 'completed',
					value: 'Completed',
				},
				{
					key: 'incomplete',
					value: 'Incomplete',
				},
			],
		},
		{
			label: 'Payment method',
			column: 'payment',
			variants: [
				{
					key: 'crypto',
					value: 'Crypto',
				},
				{
					key: 'card',
					value: 'Card',
				},
			],
		},
	],
};
