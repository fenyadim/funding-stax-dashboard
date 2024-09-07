import { FC } from 'react';

import { Block } from '@/shared/ui';

import { ChallengeItem } from '../ChallengeItem/ChallengeItem';
import { ChallengeItemListProps } from '../type';

export const ChallengeItemList: FC<ChallengeItemListProps> = ({
	locale,
	title,
	challengeItems,
}) => {
	return (
		<Block direction='column' gap={8} title={title} max>
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
