import { FC } from 'react';

import { Flex } from '@/components/ui';
import {
	PerformanceBlock,
	ResultBlock,
	TradingLogBlock,
} from '@/widgets/ChallengeDetailsBlocks';

interface ChallengeDetailsProps {
	id: string;
}

export const ChallengeDetails: FC<ChallengeDetailsProps> = ({ id }) => {
	return (
		<Flex direction='column' gap='32'>
			<PerformanceBlock />
			<ResultBlock />
			<TradingLogBlock />
		</Flex>
	);
};
