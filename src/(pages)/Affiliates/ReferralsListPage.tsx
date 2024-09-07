import { FC } from 'react';

import { ReferralsListTable } from '@/components/features/Affiliates';
import { Block } from '@/shared/ui';

interface ReferralsListPageProps {}

export const ReferralsListPage: FC<ReferralsListPageProps> = ({}) => {
	return (
		<Block justify='stretch' max title='Referrals list'>
			<ReferralsListTable />
		</Block>
	);
};
