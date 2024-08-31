import { FC } from 'react';

import { Block } from '@/components/ui';

import { ChallengeItem } from '../ChallengeItem/ChallengeItem';
import { ChallengeItemListProps } from '../type';

export const ChallengeItemList: FC<ChallengeItemListProps> = ({
	locale,
	title,
	challengeItems,
}) => {
	return (
		<Block direction='column' gap={16} title={title}>
			{challengeItems.map((item, index) => (
				<ChallengeItem
					key={`${item.accountId}-${index}`}
					locale={locale}
					theme={item.result === 'Failed' ? 'negative' : 'positive'}
					{...item}
				/>
			))}
		</Block>
	);
};
