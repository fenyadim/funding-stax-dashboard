import { ChallengeTable } from '@/components/features/Billing';
import { Block } from '@/shared/ui';

export const ChallengePayoutsPage = () => {
	return (
		<Block
			title='Challenge payouts'
			direction='column'
			align='stretch'
			gap={16}
			max
		>
			<ChallengeTable />
		</Block>
	);
};
