import { FC } from 'react';

import { Flex } from '@/components/ui';
import { ChallengeItem } from '@/entities/Challenge';
import { ChallengeItemListProps } from '@/entities/Challenge/type';

import styles from './ChallengeItemList.module.scss';

export const ChallengeItemList: FC<ChallengeItemListProps> = ({
	locale,
	title,
	challengeItems,
}) => {
	return (
		<Flex
			direction='column'
			align='start'
			gap='8'
			max
			className={styles.wrapper}
		>
			<h2 className={styles.title}>{title}</h2>
			{challengeItems.map((item, index) => (
				<ChallengeItem
					key={`${item.accountId}-${index}`}
					locale={locale}
					theme={item.result === 'Failed' ? 'negative' : 'positive'}
					{...item}
				/>
			))}
		</Flex>
	);
};
