import { ReferralTable } from '@/components/features/Billing';
import { Block } from '@/components/ui';

export default function ReferralsPayoutsRoute() {
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
}
