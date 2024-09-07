import { BillingTable } from '@/components/features/Billing';
import { Block } from '@/components/ui';

export const BillingPage = async () => {
	return (
		<Block
			title='Billing history'
			direction='column'
			align='stretch'
			gap={16}
			max
		>
			<BillingTable />
		</Block>
	);
};
