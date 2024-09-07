import { ReferralTable } from '@/components/features/Billing';
import { Block } from '@/shared/ui';

export const ReferralPayoutsPage = () => {
	return (
		<Block
			title='Referral payouts'
			direction='column'
			align='stretch'
			gap={16}
			max
		>
			<ReferralTable />
		</Block>
	);
};
