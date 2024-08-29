import { FC } from 'react';

import { Flex } from '@/components/ui';
import {
	PerformanceBlock,
	ResultBlock,
	TitleBlock,
	TradingLogBlock,
} from '@/widgets/ChallengeDetailsBlocks';

interface ChallengeDetailsProps {
	id: string;
}

export const ChallengeDetails: FC<ChallengeDetailsProps> = ({ id }) => {
	return (
		<Flex align='start' direction='column' gap='32'>
			<TitleBlock challengeCount={6000} id={id} stageCount={1} />
			<PerformanceBlock />
			<ResultBlock />
			<TradingLogBlock />
		</Flex>
	);
};
